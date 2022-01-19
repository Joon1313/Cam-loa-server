const express = require("express");
const router = express.Router();
const User = require("../../models/user");

router.patch("/", async (req, res) => {
  const { id, todo } = req.body;
  console.log(id);
  try {
    await User.updateOne({ id }, { todo });
    res.status(200).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await User.findOne({ id });
    res.status(200).end(user.todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
