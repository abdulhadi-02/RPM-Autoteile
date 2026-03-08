const User = require("../models/User");

// @وصف: جلب كل المستخدمين
// @طريقة الطلب: GET /api/users
const getUsers = async (req, res) => {
  try {
    const users = await User.find(); // جلب كل المستخدمين
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @وصف: جلب مستخدم واحد بواسطة الـ ID
// @طريقة الطلب: GET /api/users/:id
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) res.json(user);
    else res.status(404).json({ message: "المستخدم غير موجود" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @وصف: إنشاء مستخدم جديد
// @طريقة الطلب: POST /api/users
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @وصف: تعديل مستخدم بواسطة الـ ID
// @طريقة الطلب: PUT /api/users/:id
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (user) res.json(user);
    else res.status(404).json({ message: "المستخدم غير موجود" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @وصف: حذف مستخدم بواسطة الـ ID
// @طريقة الطلب: DELETE /api/users/:id
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) res.json({ message: "تم حذف المستخدم بنجاح" });
    else res.status(404).json({ message: "المستخدم غير موجود" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};