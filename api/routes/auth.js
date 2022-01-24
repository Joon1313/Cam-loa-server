const express = require("express");
const router = express.Router();
const AuthService = require("../../services/auth");

router.get("/", (req, res) => {
  const token = req.cookies.auth;
  try {
    const result = AuthService.verify(token);
    res.status(200).json({ isLogin: result });
  } catch {
    res.status(200).json({ isLogin: false });
  }
});

module.exports = router;
