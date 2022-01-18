const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { JWT_SECRET } = process.env;

router.get("/", async (req, res) => {
  const token = req.cookies.auth;
  if (!token) return res.status(200).json({ isLogin: false });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.status(201).json({ user: decoded.id, isLogin: true });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = router;
