import Attendance from "../models/Attendance.js";
import moment from "moment";

export const checkIn = async (req, res) => {
  const userId = req.user.id;
  const date = moment().format("YYYY-MM-DD");

  const existing = await Attendance.findOne({ userId, date });
  if (existing) return res.json({ msg: "Already checked in today" });

  await Attendance.create({
    userId,
    date,
    checkInTime: moment().format("HH:mm"),
    status: "present"
  });

  res.json({ msg: "Check-in successful" });
};

export const checkOut = async (req, res) => {
  const userId = req.user.id;
  const date = moment().format("YYYY-MM-DD");

  const record = await Attendance.findOne({ userId, date });
  if (!record) return res.json({ msg: "Check-in not found" });

  const checkOutTime = moment().format("HH:mm");

  const totalHours = moment(checkOutTime, "HH:mm").diff(
    moment(record.checkInTime, "HH:mm"),
    "hours"
  );

  record.checkOutTime = checkOutTime;
  record.totalHours = totalHours;

  await record.save();

  res.json({ msg: "Check-out successful", record });
};

export const myHistory = async (req, res) => {
  const history = await Attendance.find({ userId: req.user.id });
  res.json(history);
};

export const todayStatus = async (req, res) => {
  const date = moment().format("YYYY-MM-DD");
  const status = await Attendance.findOne({ userId: req.user.id, date });
  res.json(status || { msg: "Not checked in" });
};

export const allEmployees = async (req, res) => {
  const data = await Attendance.find().populate("userId", "name email employeeId department");
  res.json(data);
};
