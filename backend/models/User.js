// نموذج بيانات المستخدم
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // سيتم تخزينها مشفرة
    isAdmin: { type: Boolean, required: true, default: false }, // لتحديد إذا كان المستخدم مسؤول
  },
  { timestamps: true }
);

// قبل حفظ المستخدم، نشفر كلمة السر
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);
module.exports = User;