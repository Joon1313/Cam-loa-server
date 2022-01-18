const UserRepository = require("../repositories/user");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const dotenv = require("dotenv");
dotenv.config();
const { JWT_SECRET } = process.env;

class UserService {
  async login({ id, password }) {
    const user = await UserRepository.findOne(id);
    if (!user) throw new Error("사용자를 찾을수 없습니다.");
    if (await argon2.verify(user.password, password)) {
      const token = jwt.sign({ id: user.id }, JWT_SECRET);
      return token;
    } else {
      throw new Error("Password not match");
    }
  }

  async signup({ id, password }) {
    const hash = await argon2.hash(password);
    const result = await UserRepository.create({ id, password: hash });
    return result;
  }
}

module.exports = new UserService();
