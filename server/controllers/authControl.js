import User from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
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

    const user = await User.create({
      name,
      email,
      password: hashed,
      role: "user",
    });
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

    const safeUser = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar || null,
    };
    res.json({ user: safeUser, token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  res.json({ message: "Logged out successfully" });
};

export const user = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ msg: "User not found" });

    const baseUrl = process.env.BASE_URL || "http://localhost:8000";

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role || "user", // fallback if role missing
      avatar: user.avatar ? `${baseUrl}${user.avatar}` : null,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const { name } = req.body;
    const updateData = {};
    if (name) updateData.name = name;
    if (req.file) updateData.avatar = `/uploads/${req.file.filename}`;

    console.log(req.file);

    const updatedUser = await User.findByIdAndUpdate(req.userId, updateData, {
      new: true,
    }).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    const baseUrl = process.env.BASE_URL || "http://localhost:8000";

    res.json({
      ...updatedUser.toObject(),
      avatar: updatedUser.avatar ? `${baseUrl}${updatedUser.avatar}` : null,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Update failed" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    // Make sure only admin can access
    if (req.userRole !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    const users = await User.find({ role: "user" }).select("-password");
    const baseUrl = process.env.BASE_URL || "http://localhost:8000";

    const formattedUsers = users.map((user) => ({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar ? `${baseUrl}${user.avatar}` : null,
    }));

    res.json(formattedUsers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
