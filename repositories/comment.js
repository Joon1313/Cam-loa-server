const Comment = require("../models/comment");

class CommentRepository {
  async find(skip) {
    const result = await Comment.find()
      .select("-_id name content created")
      .sort({ created: "desc" })
      .skip(skip)
      .limit(40);
    return result;
  }

  async create({ ...commentData }) {
    const comment = new Comment({
      ...commentData,
    });
    const result = await comment.save();
    return result;
  }
}

module.exports = new CommentRepository();
