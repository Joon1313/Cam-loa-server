const express = require("express");
const app = express();
// const cors = require("cors");
// const path = require("path");
const port = process.env.PORT || 3333;
const rateLimit = require("express-rate-limit");
const limitOptions = require("./options/ratelimit");
const comments = require("./api/routes/comments");
const imgs = require("./api/routes/imgs");
const backup = require("./api/routes/backup");
const chars = require("./api/routes/chars");
const mongooseInit = require("./api/loaders/mongoose");

mongooseInit();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(rateLimit.default(limitOptions));
app.use("/api/comments", comments);
app.use("/api/imgs", imgs);
app.use("/api/backup", backup);
app.use("/api/chars", chars);

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
