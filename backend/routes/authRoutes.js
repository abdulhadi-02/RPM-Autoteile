// الربط بين Route و Controller
const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/AuthController");

// Route لتسجيل مستخدم جديد
router.post("/register", registerUser);

// Route لتسجيل دخول المستخدم
router.post("/login", loginUser);

module.exports = router; 