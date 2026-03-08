const Order = require("../models/order");

// استرجاع الطلبات الخاصة بالمستخدم
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// إنشاء طلب جديد (مثال)
const createOrder = async (req, res) => {
  const { orderItems } = req.body;
  if (!orderItems || orderItems.length === 0) {
    return res.status(400).json({ message: "No order items" });
  }
  const order = new Order({
    user: req.user._id,
    orderItems,
  });
  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
};

module.exports = { getOrders, createOrder };