// حماية Routes الخاصة بحيث يكون المستخدم مسجل دخول
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// التحقق من أن المستخدم مسجل دخول (باستخدام JWT)
const protect = async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    try {
      token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      if (!req.user) {
        return res.status(401).json({ message: "User not found" });
      }
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};

// التحقق من أن المستخدم لديه صلاحيات أدمن
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    return next();
  }
  return res.status(403).json({ message: "Not authorized as admin" });
};

module.exports = { protect, admin };