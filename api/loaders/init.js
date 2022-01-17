const mongooseInit = require("./mongoose");
const expressInit = require("./express");
const greenlockInit = require("./greenlock");

async function loaderInit(app) {
  await expressInit(app);
  await mongooseInit();
  // await greenlockInit(app);
}

module.exports = loaderInit;
