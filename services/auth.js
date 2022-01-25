const jwt = require("jsonwebtoken");

class AuthService {
  verify(token) {
    jwt.verify(token, process.env.JWT_SECRET);
    return true;
  }
}

module.exports = new AuthService();
