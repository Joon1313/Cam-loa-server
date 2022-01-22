const path = require("path");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { JWT_SECRET } = process.env;

const restricteAuth = (req, res, next) => {
  const token = req.cookies.auth;
  if (!token) return res.sendFile(path.resolve(__dirname, "../../build/index.html"));
  try {
    jwt.verify(token, JWT_SECRET);
    next();
  } catch (err) {
    return res.sendFile(path.resolve(__dirname, "../../build/index.html"));
  }
};

const privateAuth = (req, res, next) => {
  const token = req.cookies.auth;
  if (!token) return res.redirect("/login");
  try {
    jwt.verify(token, JWT_SECRET);
    next();
  } catch (err) {
    return res.redirect("/login");
  }
};

module.exports = { restricteAuth, privateAuth };
