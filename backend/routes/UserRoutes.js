const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");

const { protect, admin } = require("../middleware/authMiddleware");

// كل العمليات للمسؤول فقط
router.get("/", protect, admin, getUsers);
router.get("/:id", protect, admin, getUserById);
router.post("/", protect, admin, createUser);
router.put("/:id", protect, admin, updateUser);
router.delete("/:id", protect, admin, deleteUser);

module.exports = router;