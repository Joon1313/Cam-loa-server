const ImgRepository = require("../repositories/img");

class ImgService {
  async findAll() {
    const result = await ImgRepository.findAll();
    return result;
  }
}

module.exports = new ImgService();
