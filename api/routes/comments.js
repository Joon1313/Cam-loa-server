const express = require("express");
const router = express.Router();
const CommentService = require("../../services/comment");

router.get("/:page", async (req, res) => {
  try {
    const page = Number(req.params.page);
    const comment = await CommentService.find(page);
    res.json(comment);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  if (!req.body.name || !req.body.content) return res.status(400).send({ error: "제목, 내용 은 필수데이터 입니다." });
  try {
    const comment = await CommentService.create(req);
    res.json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
