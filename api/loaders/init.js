const mongooseInit = require("./mongoose");
const expressInit = require("./express");
const greenlockInit = require("./greenlock");

async function loaderInit(app) {
  try {
    await expressInit(app);
    console.log("Express Init");
    await mongooseInit();
    console.log("MongoDB Connected");
    await greenlockInit(app);
    console.log("GreenLock Start");
  } catch (err) {
    console.log(err);
  }
}

module.exports = loaderInit;
