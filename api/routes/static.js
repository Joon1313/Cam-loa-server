const express = require("express");
const router = express.Router();
const path = require("path");
const { restricteAuth, privateAuth } = require("../../middlewares/auth");

router.get("/engrave", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../../build/index.html"));
});
router.get("/raid", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../../build/index.html"));
});

router.get("/comment", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../../build/index.html"));
});

router.get("/todo", restricteAuth, (req, res) => {
  res.redirect("/member-todo");
});
router.get("/set", restricteAuth, (req, res) => {
  res.redirect("/");
});
router.get("/login", restricteAuth, (req, res) => {
  res.redirect("/");
});
router.get("/signup", restricteAuth, (req, res) => {
  res.redirect("/");
});
router.get("/profile", privateAuth, (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../../build/index.html"));
});
router.get("/member-todo", privateAuth, (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../../build/index.html"));
});

module.exports = router;
