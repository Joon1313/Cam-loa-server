const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { JWT_SECRET } = process.env;

// 임시코드 2일뒤 tmp 제거
router.get("/", (req, res) => {
  const token = req.cookies.auth;
  try {
    const tmp = jwt.verify(token, JWT_SECRET);
    res.status(200).json({ user: tmp.id, isLogin: true });
  } catch (error) {
    res.status(200).json({ isLogin: false });
  }
});

module.exports = router;
