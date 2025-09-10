import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`mongodb Connected ${conn.connection.host}`);
  } catch (error) {
    console.error("mongodb connection failed", error.message);
    process.exit(1);
  }
};
