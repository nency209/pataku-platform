import User from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const userexits = await User.findOne({ email });

    if (userexits) {
      return res.status(400).json({ message: "user already exits" });
    }

    const hashed = await bcrypt.hash(password, 10);
    
    const user = await User.create({ name, email, password: hashed });
    res.json({ message: "Signup successful, please login" });
  } catch (err) {
    console.error("Signup Error:", err.message);
    res.status(500).json({ message: err.message });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "user not found" });

    const passwordmatch = await bcrypt.compare(password, user.password);
    if (!passwordmatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user);
    res.json({ user, token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  res.json({ message: "Logged out successfully" });
};
