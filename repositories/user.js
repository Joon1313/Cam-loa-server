const User = require("../models/user");

class UserRepository {
  async findOne(id) {
    const result = await User.findOne({ id });
    return result;
  }
  async create({ ...userData }) {
    const newUser = new User({
      ...userData,
    });
    const result = await newUser.save();
    return result;
  }
}

module.exports = new UserRepository();
