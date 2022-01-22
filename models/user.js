const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  id: {
    type: String,
    requried: true,
  },
  password: {
    type: String,
    requried: true,
  },
  todo: {
    type: String,
    requried: true,
  },
  date: {
    type: Number,
    requried: true,
  },
  memo: {
    type: String,
    requried: true,
  },
  color: {
    type: String,
    requried: true,
  },
  ctnSize: {
    type: String,
    requried: true,
  },
  checkbox: {
    type: Number,
    requried: true,
  },
});
module.exports = mongoose.model("User", userSchema);
