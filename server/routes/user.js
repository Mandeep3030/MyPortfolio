import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
  signup,
  signin
} from "../controllers/user.js";
import authMiddleware from "../middlewares/auth.js";
import { authorize } from "../middlewares/authorize.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", authMiddleware, authorize("admin"), createUser);
router.put("/:id", authMiddleware, authorize("admin"), updateUser);
router.delete("/:id", authMiddleware, authorize("admin"), deleteUser);
router.delete("/", authMiddleware, authorize("admin"), deleteAllUsers);


router.post("/signup", signup); // public signup (role defaults to user)
router.post("/signin", signin); // legacy signin (alternative to /api/auth/signin)


export default router;
