const mongoose = require("mongoose");

const { Schema } = mongoose;
const { Types: ObjectId } = Schema;
const noticeSchema = new Schema({
  title: {
    type: String,
    requried: true,
  },
  version: {
    type: Number,
    requried: true,
  },
});

module.exports = mongoose.model("Notice", noticeSchema);
