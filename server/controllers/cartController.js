import Cart from "../model/Cart.js";
import redisClient from "../config/redis.js";

// ✅ Add to Cart
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.userId;

    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }

    await cart.save();

    // ✅ Populate product details before sending
    const populatedCart = await cart.populate("items.product");

    // ✅ Save populated cart to Redis
    await redisClient.set(`cart:${userId}`, JSON.stringify(populatedCart), {
      EX: 3600,
    });

    res.json(populatedCart);
  } catch (err) {
    console.error("Add to cart failed:", err);
    res.status(500).json({ error: "Failed to add to cart" });
  }
};

// ✅ Update Item Quantity
export const updateQuantity = async (req, res) => {
  try {
    const productId = req.body.productId || req.params.productId; // support both body or params
    const quantity = Number(req.body.quantity);
    const userId = req.userId;

    if (!productId || !quantity) {
      return res.status(400).json({ error: "Invalid productId or quantity" });
    }

    // Fetch cart and populate products
    let cart = await Cart.findOne({ user: userId }).populate("items.product");
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    // Safe lookup for populated/unpopulated product
    const item = cart.items.find((i) => {
      if (!i.product) return false;
      // If populated, use _id; else use ObjectId
      const pid = i.product._id
        ? i.product._id.toString()
        : i.product.toString();
      return pid === productId.toString();
    });

    if (!item) return res.status(404).json({ error: "Item not in cart" });

    // Prevent invalid quantities
    item.quantity = Math.max(1, quantity);

    await cart.save();

    // Populate products again before sending
    const populatedCart = await cart.populate("items.product");

    // Update Redis cache
    await redisClient.set(`cart:${userId}`, JSON.stringify(populatedCart), {
      EX: 3600,
    });

    res.json(populatedCart);
  } catch (err) {
    console.error("Update cart failed:", err);
    res.status(500).json({ error: "Failed to update cart" });
  }
};

// ✅ Get Cart (with redisClient Cache)
export const getCart = async (req, res) => {
  try {
    const userId = req.userId;

    // 1. Check redisClient first
    const cachedCart = await redisClient.get(`cart:${userId}`);
    if (cachedCart) {
      console.log("📦 Cart from redisClient Cache");
      return res.json(JSON.parse(cachedCart));
    }

    // 2. If not in cache, fetch from DB
    const cart = await Cart.findOne({ user: userId }).populate("items.product");

    // 3. Save to redisClient (with expiry properly)
    if (cart) {
      await redisClient.set(`cart:${userId}`, JSON.stringify(cart), {
        EX: 3600, // ✅ Expire in 1 hour
      });
    }

    res.json(cart);
  } catch (err) {
    console.error("Get cart failed:", err);
    res.status(500).json({ error: "Failed to fetch cart" });
  }
};

// ✅ Remove Item
export const removeFromCart = async (req, res) => {
  try {
    const userId = req.userId;
    const cart = await Cart.findOne({ user: userId });

    cart.items = cart.items.filter(
      (item) => item.product.toString() !== req.params.productId
    );
    await cart.save();

    const populatedCart = await cart.populate("items.product");
    // ✅ Update redisClient
    await redisClient.set(`cart:${userId}`, JSON.stringify(populatedCart), {
      EX: 3600,
    });

    res.json(populatedCart);
  } catch (err) {
    console.error("Remove from cart failed:", err);
    res.status(500).json({ error: "Failed to remove item from cart" });
  }
};
