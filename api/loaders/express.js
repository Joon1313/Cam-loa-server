const express = require("express");
const cors = require("cors");
const corsOptions = require("../../options/cors");
const path = require("path");
const rateLimit = require("express-rate-limit");
const limitOptions = require("../../options/ratelimit");
const comments = require("../routes/comments");
const imgs = require("../routes/imgs");
const backup = require("../routes/backup");
const chars = require("../routes/chars");
const static = require("../routes/static");

function expressInit(app) {
  app.use(cors(corsOptions));
  app.use(rateLimit.default(limitOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path.resolve(__dirname, "../../../build")));
  app.use("/api/comments", comments);
  app.use("/api/imgs", imgs);
  app.use("/api/backup", backup);
  app.use("/api/chars", chars);
  app.use("/", static);
  app.disable("x-powered-by");
}

module.exports = expressInit;
