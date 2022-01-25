const mongoose = require("mongoose");

async function mongooseInit() {
  await mongoose.connect(process.env.DB_CONNECTION, {
    dbName: "cam-loa",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  console.log("MongoDB Connected");
}
async function mongooseClose() {
  await mongoose.connection.close();
}

module.exports = { mongooseInit, mongooseClose };
