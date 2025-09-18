import Product from "../model/Product.js";
import redisClient from "../config/redis.js";
import { io } from "../server.js";
import mongoose from "mongoose";

export const createProduct = async (req, res) => {
  try {
    const data = req.body;
    if (req.file) {
      data.image = `/uploads/${req.file.filename}`;
    }

    const product = await Product.create(data);
    await redisClient.del("products:all");
    io.emit("product_added", product);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const cachedProducts = await redisClient.get("products:all");
    if (cachedProducts) {
      return res.json(JSON.parse(cachedProducts));
    }

    const products = await Product.find();
    await redisClient.set("products:all", JSON.stringify(products));
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Optional: validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    // Check cache
    const cachedProduct = await redisClient.get(`product:${id}`);
    if (cachedProduct) {
      return res.json(JSON.parse(cachedProduct));
    }

    // Fetch from MongoDB
    const product = await Product.findById(id); // <-- Use findById

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Save in Redis
    await redisClient.setEx(`product:${id}`, 3600, JSON.stringify(product));

    res.json(product);
  } catch (err) {
    console.error("❌ getProduct error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let data = req.body;
    if (req.file) data.image = `/uploads/${req.file.filename}`;

    const product = await Product.findById(id);
    if (!product) res.status(404).json({ message: "product not found" });

    Object.assign(product, data);

    await product.save();

    await redisClient.del("products:all");
    io.emit("product_updated", product);

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) return res.status(404).json({ message: "Product not found" });

    await redisClient.del("products:all");
    io.emit("product_deleted", id);

    res.json({ message: "Product deleted", id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
