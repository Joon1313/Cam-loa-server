const express = require("express");
const cors = require("cors");
const corsOptions = require("../../options/cors");
const path = require("path");
const rateLimit = require("express-rate-limit");
const limitOptions = require("../../options/ratelimit");
const cookieParser = require("cookie-parser");
const comments = require("../routes/comments");
const imgs = require("../routes/imgs");
const backup = require("../routes/backup");
const chars = require("../routes/chars");
const static = require("../routes/static");
const login = require("../routes/login");
const signup = require("../routes/signup");
const auth = require("../routes/auth");
const logout = require("../routes/logout");
const todo = require("../routes/todo");

function expressInit(app) {
  app.use(cors(corsOptions));
  app.use(rateLimit.default(limitOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.resolve(__dirname, "../../../build")));
  app.use("/api/comments", comments);
  app.use("/api/imgs", imgs);
  app.use("/api/backup", backup);
  app.use("/api/chars", chars);
  app.use("/api/login", login);
  app.use("/api/signup", signup);
  app.use("/api/auth", auth);
  app.use("/api/logout", logout);
  app.use("/api/todo", todo);
  app.use("/", static);
  app.disable("x-powered-by");
}

module.exports = expressInit;
