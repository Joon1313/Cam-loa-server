const express = require("express");
const router = express.Router();
const UserService = require("../../services/user");

router.post("/", async (req, res) => {
  const { id, password } = req.body;
  if (!id || !password)
    return res
      .status(400)
      .json({ error: "아이디 또는 비밀번호가 존재하지 않습니다." });
  try {
    const token = await UserService.login({ id, password });
    res
      .status(200)
      .cookie("auth", token, {
        maxAge: 20 * 365 * 24 * 3600 * 1000,
        httpOnly: true,
        secure: true,
      })
      .json(token);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
