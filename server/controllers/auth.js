import User from "../models/user.js";
import generateToken from "../utils/jwt.js";

// POST auth/signin
export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const valid = await user.comparePassword(password);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(user);
    res.json({ message: "Signin successful", token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET auth/signout (stateless JWT – client just discards token)
export const signOut = async (_req, res) => {
  res.json({ message: "Signout successful" });
};