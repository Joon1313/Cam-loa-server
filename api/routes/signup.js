const express = require("express");
const router = express.Router();
const UserService = require("../../services/user");

router.post("/", async (req, res) => {
  const { id, password } = req.body;
  if (!id || !password)
    res
      .status(400)
      .json({ error: "아이디 또는 비밀번호가 존재하지 않습니다." });
  try {
    const user = await UserService.signup({ id, password });
    res.status(200).json(user.id);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
