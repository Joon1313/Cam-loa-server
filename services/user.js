const UserRepository = require("../repositories/user");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const dotenv = require("dotenv");
dotenv.config();
const { JWT_SECRET } = process.env;

class UserService {
  async login({ id, password }) {
    const user = await UserRepository.findOne(id);
    if (!user) throw new Error("잘못된 아이디입니다.");
    if (await argon2.verify(user.password, password)) {
      const token = jwt.sign({ id: user.id }, JWT_SECRET);
      return token;
    } else {
      throw new Error("잘못된 비밀번호입니다.");
    }
  }

  async signup({ id, password, todo }) {
    const user = await UserRepository.findOne(id);
    if (user) throw new Error("이미 존재하는 아이디 입니다.");
    const hash = await argon2.hash(password);
    const create = await UserRepository.create({ id, password: hash, todo });
    const token = jwt.sign({ id: create.id }, JWT_SECRET);
    return token;
  }
}

module.exports = new UserService();
