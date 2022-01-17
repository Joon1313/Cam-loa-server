const CommentRepository = require("../repositories/comment");

class CommentService {
  async findAll() {
    const result = await CommentRepository.findAll();
    return result;
  }
  async create(req) {
    const { name, content } = req.body;
    const result = await CommentRepository.create({
      name,
      content,
      ip: req.ip,
    });

    return result;
  }
}

module.exports = new CommentService();
