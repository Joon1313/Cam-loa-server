const mongooseInit = require("./mongoose");
const expressInit = require("./express");
const greenlockInit = require("./greenlock");

async function loaderInit(app) {
  try {
    await expressInit(app);
    await mongooseInit();
    await greenlockInit(app);
  } catch (err) {
    console.log(err);
  }
}

module.exports = loaderInit;
