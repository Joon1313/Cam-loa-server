const express = require("express");
const router = express.Router();
const CommentService = require("../../services/comment");

// router.use(function timeLog(req, res, next) {
//   console.log("Time: ", Date.now());
//   next();
// });

router.get("/", async (req, res) => {
  try {
    const comment = await CommentService.findAll();
    res.json(comment);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  if (!req.body.name || !req.body.content)
    return res.status(400).send({ error: "name or content is null" });
  try {
    const comment = await CommentService.create(req);
    res.json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
