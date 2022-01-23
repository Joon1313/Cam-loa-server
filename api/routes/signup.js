const express = require("express");
const router = express.Router();
const UserService = require("../../services/user");

router.post("/", async (req, res) => {
  const { id, password } = req.body;
  if (!id || !password) return res.status(400).json({ error: "아이디 또는 비밀번호 를 입력해주세요." });
  for (element in req.body) {
    if (!element) return res.status(400).json({ error: "필수 데이터 누락 관리자에게 문의해주세요." });
  }

  try {
    const token = await UserService.signup({ id, ...req.body });
    res
      .status(200)
      .cookie("auth", token, {
        maxAge: 20 * 365 * 24 * 3600 * 1000,
        httpOnly: true,
        secure: true,
      })
      .end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
