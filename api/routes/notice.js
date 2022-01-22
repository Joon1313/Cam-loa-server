const express = require("express");
const router = express.Router();
const Notice = require("../../models/notice");

router.get("/:id", async (req, res) => {
  try {
    const notice = await Notice.findOne({ _id: req.params.id });
    res.status(200).json(notice);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
// router.post("/", async (req, res) => {
//   try {
//     const notice = await Notice.create({
//       title: "test",
//     });
//     res.status(200).json(notice);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

module.exports = router;
