import express from "express";
import {
  getAllQualifications,
  getQualificationById,
  createQualification,
  updateQualification,
  deleteQualification,
  deleteAllQualifications
} from "../controllers/qualification.js";
import authMiddleware from "../middlewares/auth.js";
import { authorize } from "../middlewares/authorize.js";

const router = express.Router();

router.get("/", getAllQualifications);
router.get("/:id", getQualificationById);
router.post("/", authMiddleware, authorize("admin"), createQualification);
router.put("/:id", authMiddleware, authorize("admin"), updateQualification);
router.delete("/:id", authMiddleware, authorize("admin"), deleteQualification);
router.delete("/", authMiddleware, authorize("admin"), deleteAllQualifications);

export default router;
