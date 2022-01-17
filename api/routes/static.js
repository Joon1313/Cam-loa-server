const express = require("express");
const router = express.Router();
const path = require("path");

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

module.exports = router;
