const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { JWT_SECRET } = process.env;

class AuthService {
  verify(token) {
    jwt.verify(token, JWT_SECRET);
    return true;
  }
}

module.exports = new AuthService();
