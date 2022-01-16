const Comment = require("../models/comment");

class CommentService {
  async findAll() {
    const result = await Comment.find()
      .select("-_id name content created")
      .sort({ created: "desc" });
    return result;
  }
  async create(req) {
    const { name, content } = req.body;
    const comment = new Comment({
      name,
      content,
      ip: req.ip,
    });
    const result = await comment.save();
    return result;
  }
}

module.exports = new CommentService();
