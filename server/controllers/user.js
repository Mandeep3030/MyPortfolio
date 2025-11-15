import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


// Get all users
export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Get one user
export const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

// Create user
export const createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
};

// Update user
export const updateUser = async (req, res) => {
  const update = { ...req.body };
  if (update.password) {
    update.password = await bcrypt.hash(update.password, 10);
  }
  const updated = await User.findByIdAndUpdate(req.params.id, update, { new: true });
  res.json(updated);
};

// Delete single user
export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};

// Delete all users
export const deleteAllUsers = async (req, res) => {
  await User.deleteMany({});
  res.json({ message: "All users deleted" });
};




export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  await user.save();
  res.status(201).json({ message: "User registered" });
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
};