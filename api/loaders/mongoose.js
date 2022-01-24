const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const { DB_CONNECTION } = process.env;

async function mongooseInit() {
  await mongoose.connect(DB_CONNECTION, {
    dbName: "cam-loa",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
}
async function mongooseClose() {
  await mongoose.connection.close();
}

module.exports = { mongooseInit, mongooseClose };
