import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js";
import redisClient from "./config/redis.js";
import authRoutes from "./Routes/authRoute.js";
import productRoutes from "./Routes/productRoute.js";
import orderRoutes from "./Routes/orderRoute.js";
import wishlistRoutes from "./Routes/wishlistRoute.js";
import cartRoutes from "./Routes/cartRoute.js";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

// Middlewares
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// ------------------ Socket.io ------------------
const server = http.createServer(app);

export const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log(" Socket connected:", socket.id);

  socket.on("disconnect", () => {
    console.log(" Socket disconnected:", socket.id);
  });
});

// ------------------ MongoDB ------------------
const PORT = process.env.PORT || 8000;
await connectDB();

// ------------------ Redis ------------------
await redisClient
  .connect()
  .then(() => console.log("✅ Redis Connected"))
  .catch((err) => console.error("❌ Redis Connection Failed:", err));

// ------------------ Routes ------------------
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes(io));
app.use("/api/orders", orderRoutes(io));
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/cart", cartRoutes);

// ------------------ Start server ------------------
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
