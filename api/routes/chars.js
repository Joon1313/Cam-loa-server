const express = require("express");
const router = express.Router();
const CharService = require("../../services/char");

router.get("/:name", async (req, res, next) => {
  const 현재시간 = new Date();
  if (현재시간.getDay() === 3 && 5 < 현재시간.getHours() && 현재시간.getHours() < 10)
    return res.status(400).json({ error: "공식 홈페이지 점검시간 입니다." });
  if (!req.params.name) return res.status(400).json({ error: "캐릭터명이 존재하지 않습니다" });

  try {
    const data = await CharService.search(req.params.name);
    res.json(data);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;
