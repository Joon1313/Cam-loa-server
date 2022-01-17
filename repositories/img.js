const Img = require("../models/img");

class ImgRepository {
  async findAll() {
    const result = await Img.find();
    return result;
  }
}

module.exports = new ImgRepository();
