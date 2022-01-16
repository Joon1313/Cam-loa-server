const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const { DB_CONNECTION } = process.env;

function mongooseInit() {
  mongoose
    .connect(DB_CONNECTION, {
      dbName: "cam-loa",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
}

module.exports = mongooseInit;
