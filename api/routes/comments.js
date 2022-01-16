const express = require("express");
const router = express.Router();
const Comment = require("../../models/comment");

// router.use(function timeLog(req, res, next) {
//   console.log("Time: ", Date.now());
//   next();
// });

router.get("/", (req, res) => {
  Comment.find((err, comment) => {
    if (err) return res.status(500).send({ error: "db error" });
    res.json(comment);
  })
    .select("-_id name content created")
    .sort({ created: "desc" });
});

router.post("/", (req, res) => {
  if (!req.body.name || !req.body.content)
    return res.status(500).send({ error: "name or content is null" });
  const comment = new Comment({
    name: req.body.name,
    content: req.body.content,
    ip: req.ip,
  });
  comment
    .save()
    .then((r) => {
      res.status(200).send({ message: "success!!", error: null });
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

module.exports = router;
