// ملف تشغيل السيرفر
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/AuthRoutes");
const userRoutes = require("./routes/UserRoutes");
const productRoutes = require("./routes/ProductRoutes");
const orderRoutes = require("./routes/orderRoutes");

// Middleware للأخطاء
const { errorHandler } = require("./middleware/errorMiddleware");

// تحميل المتغيرات من ملف .env
dotenv.config();

// الاتصال بقاعدة البيانات
connectDB();

const app = express();

// Middlewares عامة
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// Route تجريبي للتأكد من أن الـ API يعمل
app.get("/", (req, res) => {
  res.json({ message: "API is running..." });
});

// Routes الرئيسية للـ API
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Middleware لمعالجة الأخطاء (يجب أن يأتي بعد كل الـ Routes)
app.use(errorHandler);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);