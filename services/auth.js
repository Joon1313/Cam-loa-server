const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { JWT_SECRET } = process.env;

class AuthService {
  verify(token) {
    const decoded = jwt.verify(token, JWT_SECRET);
    const data = {
      user: decoded.id,
      isLogin: true,
    };
    return data;
  }
}

module.exports = new AuthService();
