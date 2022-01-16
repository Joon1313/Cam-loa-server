const mongoose = require("mongoose");

const { Schema } = mongoose;
const { Types: ObjectId } = Schema;
const commentSchema = new Schema({
  name: {
    type: String,
    requried: true,
  },
  content: {
    type: String,
    requried: true,
  },
  ip: {
    type: String,
    requried: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
