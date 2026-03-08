// Middleware عام لمعالجة الأخطاء في الـ API
// أي خطأ يمرر إلى next(err) سيصل إلى هذا المكان
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  console.error("API Error:", err);

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message || "Internal Server Error",
  });
};

module.exports = { errorHandler };

