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
    res.status(400).json({ error: err });
  }
});

router.post("/", async (req, res) => {
  const { todo, grave, grave2, grave3 } = req.body;
  const ip = req.ip;
  try {
    const backup = await BackupService.create({
      todo,
      grave,
      grave2,
      grave3,
      ip,
    });
    res.json(backup);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = router;
