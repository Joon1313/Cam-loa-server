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
});
module.exports = mongoose.model("User", userSchema);
