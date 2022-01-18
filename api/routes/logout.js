const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.clearCookie("auth").status(200).end();
});

module.exports = router;
