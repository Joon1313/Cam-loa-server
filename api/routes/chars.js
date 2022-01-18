const express = require("express");
const router = express.Router();
const CharService = require("../../services/char");

router.get("/:name", async (req, res, next) => {
  if (!req.params.name)
    return res.status(400).json({ error: "not found name" });
  try {
    const data = await CharService.search(req.params.name);
    res.json(data);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;
