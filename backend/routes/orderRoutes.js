const express = require("express");
const router = express.Router();
const { getOrders, createOrder } = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");

// الحصول على الطلبات الخاصة بالمستخدم
router.get("/", protect, getOrders);

// إنشاء طلب جديد
router.post("/", protect, createOrder);

module.exports = router;