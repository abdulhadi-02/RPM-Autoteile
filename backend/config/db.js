// ملف الاتصال بقاعدة البيانات MongoDB
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // الاتصال بـ MongoDB باستخدام URI من ملف .env
    const conn = await mongoose.connect(process.env.DB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // إغلاق السيرفر إذا فشل الاتصال
  }
};

module.exports = connectDB;