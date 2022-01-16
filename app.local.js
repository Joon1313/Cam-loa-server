const express = require("express");
const app = express();
const cors = require("cors");
// const path = require("path");
const port = process.env.PORT || 3333;
const rateLimit = require("express-rate-limit");
const comments = require("./api/routes/comments");
const imgs = require("./api/routes/imgs");
const backup = require("./api/routes/backup");
const chars = require("./api/routes/chars");
const mongooseInit = require("./api/loaders/mongoose");

const limiter = {
  windowMs: 1 * 60 * 1000, // 15 minutes
  max: 30, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
};
mongooseInit();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(rateLimit.default(limiter));
app.use("/api/comments", comments);
app.use("/api/imgs", imgs);
app.use("/api/backup", backup);
app.use("/api/chars", chars);

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
