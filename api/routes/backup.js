const express = require("express");
const router = express.Router();
const BackupService = require("../../services/backup");

router.get("/:code", async (req, res) => {
  if (!req.params.code)
    return res.status(400).json({ error: "params is null" });
  try {
    const backup = await BackupService.findOne(req.params.code);
    res.json(backup);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const backup = await BackupService.create(req);
    res.json(backup);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
