const express = require("express");
const router = express.Router();
const path = require("path");
const AuthService = require("../../services/auth");

router.get("/todo", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../../build/index.html"));
});

router.get("/engrave", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../../build/index.html"));
});
router.get("/raid", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../../build/index.html"));
});

router.get("/comment", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../../build/index.html"));
});

router.get("/set", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../../build/index.html"));
});
router.get("/login", (req, res) => {
  try {
    const { user, isLogin } = AuthService.verify(req.cookies.auth);
    res
      .set({
        "Cache-Control": "no-cache, no-store, must-revalidate",
      })
      .redirect("/");
  } catch (err) {
    res
      .set({
        "Cache-Control": "no-cache, no-store, must-revalidate",
      })
      .sendFile(path.resolve(__dirname, "../../../build/index.html"));
  }
});
router.get("/signup", (req, res) => {
  try {
    const { user, isLogin } = AuthService.verify(req.cookies.auth);
    res
      .set({
        "Cache-Control": "no-cache, no-store, must-revalidate",
      })
      .redirect("/");
  } catch (err) {
    res
      .set({
        "Cache-Control": "no-cache, no-store, must-revalidate",
      })
      .sendFile(path.resolve(__dirname, "../../../build/index.html"));
  }
});
router.get("/profile", (req, res) => {
  try {
    const { user, isLogin } = AuthService.verify(req.cookies.auth);
    res.sendFile(path.resolve(__dirname, "../../../build/index.html"));
  } catch (err) {
    res.redirect("/");
  }
});

module.exports = router;
