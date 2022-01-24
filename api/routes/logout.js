const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  throw new Error("My first Sentry error!");
  res.clearCookie("auth").status(200).end();
});

module.exports = router;
