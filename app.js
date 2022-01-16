const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./options/cors");
const path = require("path");
const port = process.env.PORT || 3333;
const dotenv = require("dotenv");
const comments = require("./api/routes/comments");
const imgs = require("./api/routes/imgs");
const backup = require("./api/routes/backup");
const chars = require("./api/routes/chars");
const rateLimit = require("express-rate-limit");
const limitOptions = require("./options/ratelimit");
const mongooseInit = require("./api/loaders/mongoose");

dotenv.config();

mongooseInit();
app.use(cors(corsOptions));
app.use(rateLimit.default(limitOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "../build")));
app.use("/api/comments", comments);
app.use("/api/imgs", imgs);
app.use("/api/backup", backup);
app.use("/api/chars", chars);
app.disable("x-powered-by");
// require("greenlock-express")
//   .init({
//     packageRoot: "../",
//     configDir: "./greenlock.d",
//     maintainerEmail: "wkdrud13@gmail.com",
//     cluster: false,
//   })
//   .serve(app);

app.get("/todo", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

app.get("/engrave", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build/index.html"));
});
app.get("/raid", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

app.get("/comment", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

app.get("/set", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

app.listen(port, () => {
  console.log(path.resolve(__dirname, "../index.html"));
});
