const mongooseInit = require("./mongoose");
const expressInit = require("./express");

async function loaderInit(app) {
  try {
    await expressInit(app);
    console.log("Express Init");

    await mongooseInit();
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
  }
}

module.exports = loaderInit;
