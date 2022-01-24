const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const { userApiAuth } = require("../../middlewares/auth");

router.get("/", userApiAuth, async (req, res) => {
  try {
    const user = await User.findOne({ id: req.user }).select("todo date memo color ctnSize checkbox");
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error });
  }
});
router.get("/config", userApiAuth, async (req, res) => {
  try {
    const user = await User.findOne({ id: req.user }).select("date color ctnSize checkbox");
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error });
  }
});
router.patch("/", userApiAuth, async (req, res) => {
  try {
    await User.updateOne({ id: req.user }, { ...req.body, modified: new Date() });
    res.status(200).end();
  } catch (error) {
    res.status(400).json({ error });
  }
});

// 임시 코드 3일뒤에 삭제 예정 //
router.get("/:id", userApiAuth, async (req, res) => {
  try {
    const user = await User.findOne({ id: req.user }).select("todo date memo color ctnSize checkbox");
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error });
  }
});
router.get("/:id/config", userApiAuth, async (req, res) => {
  try {
    const user = await User.findOne({ id: req.user }).select("date color ctnSize checkbox");
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error });
  }
});

module.exports = router;
