import express from "express";
import { protect } from "../middleware/auth.js";
import {
  checkIn,
  checkOut,
  myHistory,
  todayStatus,
  allEmployees
} from "../controllers/attendanceController.js";

const router = express.Router();

// Employee
router.post("/checkin", protect, checkIn);
router.post("/checkout", protect, checkOut);
router.get("/my-history", protect, myHistory);
router.get("/today", protect, todayStatus);

// Manager
router.get("/all", protect, allEmployees);

export default router;
