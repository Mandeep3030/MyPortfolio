import express from "express";
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  deleteAllProjects
} from "../controllers/project.js";
import authMiddleware from "../middlewares/auth.js";
import { authorize } from "../middlewares/authorize.js";

const router = express.Router();

router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/", authMiddleware, authorize("admin"), createProject);
router.put("/:id", authMiddleware, authorize("admin"), updateProject);
router.delete("/:id", authMiddleware, authorize("admin"), deleteProject);
router.delete("/", authMiddleware, authorize("admin"), deleteAllProjects);

export default router;
