import Order from "../model/Order.js";
import Product from "../model/Product.js";
import Cart from "../model/Cart.js";
import nodemailer from "nodemailer";
import Razorpay from "razorpay";
import dotenv from "dotenv";
import redisClient from "../config/redis.js";
import crypto from "crypto";
dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

const verifyRazorpayPayment = (order_id, payment_id, signature) => {
  const generated_signature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(order_id + "|" + payment_id)
    .digest("hex");

  return generated_signature === signature;
};

// Create Razorpay order
export const createRazorpayOrder = async (req, res) => {
  const { amount } = req.body;
  try {
    const order = await razorpay.orders.create({ amount, currency: "INR" });
    res.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Razorpay order creation failed" });
  }
};

// Save order & send email
export const createOrder = async (req, res, io) => {
  try {
    const {
      customer,
      items,
      shipping,
      totals,
      paymentStatus,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    } = req.body;

    const userId = req.userId;

    // 1️⃣ Validate basic data
    if (!customer || !items || !totals) {
      return res.status(400).json({ error: "Invalid order data" });
    }

    // 2️⃣ Verify Razorpay payment (important!)
    const isValidPayment = verifyRazorpayPayment(
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature
    );
    if (!isValidPayment) {
      return res.status(400).json({ error: "Payment verification failed" });
    }

    // 3️⃣ Save order
    const order = new Order({
      customer,
      items,
      shipping,
      totals,
      paymentStatus,
      razorpayPaymentId,
    });
    await order.save();

    // ✅ Notify admin via socket
    io.emit("new_order", {
      orderId: order._id,
      customer: order.customer.name,
      total: order.totals.total,
      status: order.paymentStatus,
    });

    // 4️⃣ Loop products, reduce stock, update status

    for (const item of items) {
      const productId = item.product?._id || item.productId; // support both shapes
      const product = await Product.findById(productId);
      if (!product) continue;

      product.stock = Math.max(product.stock - item.quantity, 0);

      if (product.stock === 0) product.status = "out_of_stock";
      else if (product.stock <= 10) product.status = "low_stock";
      else product.status = "in_stock";

      await product.save();

      // Invalidate Redis cache
      await redisClient.del("products:all");
      await redisClient.del(`product:${product._id}`);

      // Live updates via Socket.io
      io.emit("product_stock_update", {
        productId: product._id,
        name: product.name,
        stock: product.stock,
        status: product.status,
      });

      if (["low_stock", "out_of_stock"].includes(product.status)) {
        io.emit("stock_alert", {
          type: product.status,
          message: `⚠️ Product "${
            product.name
          }" is now ${product.status.replace("_", " ")} (stock: ${
            product.stock
          })`,
        });
      }
    }

    // 5️⃣ Clear user cart
    await Cart.findOneAndUpdate({ user: userId }, { items: [] });
    await redisClient.del(`cart:${userId}`);

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.LOGIN, 
        pass:process.env.PASS, 
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Optional: verify SMTP connection
    transporter.verify((err, success) => {
      if (err) console.error("SMTP connection failed:", err);
      else console.log("SMTP server ready to send messages");
    });

    await transporter.sendMail({
      from: `"Pataku Store" <9748f4001@smtp-brevo.com>`,
      to: customer.email,
      subject: `Order Confirmation - ${order._id}`,
      html: `
    <h2>Thank you for your order!</h2>
    <p><strong>Order ID:</strong> ${order._id}</p>
    <p><strong>Total:</strong> ₹${totals.grandTotal}</p>
    <p><strong>Status:</strong> ${order.paymentStatus}</p>
    <h3>Items:</h3>
    <ul>
      ${items
        .map((i) => `<li>${i.name} - ${i.quantity} × ₹${i.price}</li>`)
        .join("")}
    </ul>
  `,
    });

    res.status(201).json(order);
  } catch (err) {
    console.error("❌ createOrder failed:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// Optional: Get all orders
// Get all orders for admin
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("items.product", "name price image") // populate only needed fields
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};
