const express = require("express");
const router = express.Router();
const User = require("../../models/user");

router.patch("/", async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: "로그인후 이용해주세요." });
  try {
    await User.updateOne({ id }, { ...req.body, modified: new Date() });
    res.status(200).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: "로그인후 이용해주세요." });
  try {
    const user = await User.findOne({ id }).select("todo date memo color ctnSize checkbox");
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
