const CommentRepository = require("../repositories/comment");

class CommentService {
  async find(page = 1) {
    const skip = page > 1 ? (page - 1) * 40 : 0;
    const result = await CommentRepository.find(skip);
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
