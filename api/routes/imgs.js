const express = require("express");
const router = express.Router();
const Img = require("../../models/img");

router.get("/", (req, res) => {
  Img.find((err, comment) => {
    if (err) return res.status(500).send({ error: err });
    res.json(comment);
  });
});

module.exports = router;
