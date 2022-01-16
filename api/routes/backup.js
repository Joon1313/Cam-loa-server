const express = require("express");
const router = express.Router();
const Backup = require("../../models/backup");
const BackupService = require("../../services/backup");

router.get("/:code", async (req, res) => {
  if (!req.params.code)
    return res.status(400).json({ error: "params is null" });
  try {
    const data = await BackupService.findOne(req.params.code);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.post("/", async (req, res) => {
  const { todo, grave, grave2, grave3 } = req.body;
  const ip = req.ip;
  const backup = new Backup({
    todo,
    grave,
    grave2,
    grave3,
    ip,
  });
  try {
    const data = await backup.save();
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = router;
