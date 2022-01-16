const Img = require("../models/img");

class ImgService {
  async findAll() {
    const result = await Img.find();
    return result;
  }
}

module.exports = new ImgService();
