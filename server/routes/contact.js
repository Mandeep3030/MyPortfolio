import express from "express";
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
  deleteAllContacts
} from "../controllers/contact.js";
import authMiddleware from "../middlewares/auth.js";
import { authorize } from "../middlewares/authorize.js";

const router = express.Router();

router.get("/", getAllContacts);
router.get("/:id", getContactById);
router.post("/", authMiddleware, authorize("admin"), createContact);
router.put("/:id", authMiddleware, authorize("admin"), updateContact);
router.delete("/:id", authMiddleware, authorize("admin"), deleteContact);
router.delete("/", authMiddleware, authorize("admin"), deleteAllContacts);

export default router;


// write a test code to add a contact using postman
// POST http://localhost:3000/api/contacts
// Body (JSON):
// {
//   "name": "John Doe",
//   "email": "john.doe@example.com",
//   "message": "Hello, this is a test message."
// }
