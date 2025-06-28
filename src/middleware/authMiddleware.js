const jwt = require("jsonwebtoken");
const User = require("../schema/userSchema"); // adjust path as needed
require("dotenv").config();

async function authMiddleware(req, res, next) {
  try {
    const token = req.cookies.authToken; // Read token from cookie

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized: User not found" });
    }

    req.user = user; // Attach user info to request
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    res.status(401).json({ success: false, message: "Unauthorized: Invalid token" });
  }
}

module.exports = authMiddleware;
