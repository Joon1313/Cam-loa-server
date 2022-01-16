const express = require("express");
const router = express.Router();
const ImgService = require("../../services/img");

router.get("/", async (req, res) => {
  try {
    const imgs = await ImgService.findAll();
    res.json(imgs);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
