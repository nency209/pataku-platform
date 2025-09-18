// controllers/wishlistController.js
import User from "../model/User.js"; // assumes wishlist stored in User schema
import Product from "../model/Product.js";
import Wishlist from "../model/Wishlist.js";
import redisClient from "../config/redis.js";
import { io } from "../server.js";
const cacheKey = (userId) => `wishlist:${userId}`;

export const getWishlist = async (req, res) => {
  try {
    const userId = req.userId;
    // Check Redis cache
    const cached = await redisClient.get(cacheKey(userId));
    if (cached) return res.json(JSON.parse(cached));

    const user = await User.findById(userId).populate("wishlist.product");
    if (!user) return res.status(404).json({ message: "User not found" });

    const wishlist = user.wishlist.map((item) => ({
      productId: item.product._id,
      name: item.product.name,
      price: item.product.price,
      image: item.product.image,
      addedAt: item.addedAt,
    }));

    await redisClient.set(cacheKey(userId), JSON.stringify(wishlist));
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addToWishlist = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId } = req.params; // <-- send productId in POST body

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      wishlist = await Wishlist.create({ userId, items: [{ productId }] });
    } else {
      const alreadyAdded = wishlist.items.some(
        (item) => item.productId.toString() === productId
      );
      if (!alreadyAdded) {
        wishlist.items.push({ productId });
        await wishlist.save();
      }
    }

    await wishlist.populate("items.productId");

    const formatted = wishlist.items.map((item) => ({
      productId: item.productId._id,
      name: item.productId.name,
      price: item.productId.price,
      image: item.productId.image,
      addedAt: item.addedAt,
    }));

    await redisClient.del(cacheKey(userId));
    await redisClient.set(cacheKey(userId), JSON.stringify(formatted));

    io.to(userId).emit("wishlist_updated", formatted);

    res.status(201).json(formatted);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const removeFromWishlist = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId } = req.params;

    const wishlist = await Wishlist.findOneAndUpdate(
      { userId },
      { $pull: { items: { productId } } },
      { new: true }
    ).populate("items.productId");

    if (!wishlist)
      return res.status(404).json({ message: "Wishlist not found" });

    const formatted = wishlist.items.map((item) => ({
      productId: item.productId._id,
      name: item.productId.name,
      price: item.productId.price,
      image: item.productId.image,
      addedAt: item.addedAt,
    }));

    await redisClient.del(cacheKey(userId));
    await redisClient.set(cacheKey(userId), JSON.stringify(formatted));

    io.to(userId).emit("wishlist_updated", formatted);

    res.json({ message: "Removed from wishlist", wishlist: formatted });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
