const { mongooseInit } = require("./mongoose");
const expressInit = require("./express");
const greenlockInit = require("./greenlock");
const sentryInit = require("./sentry");

async function loaderInit(app) {
  try {
    sentryInit(app);
    console.log("Sentry Init");

    expressInit(app);
    console.log("Express App Init");

    await mongooseInit();
    console.log("MongoDB Connected");

    greenlockInit(app);
    console.log("GreenLock Start");
  } catch (err) {
    console.err(err);
  }
}

module.exports = loaderInit;
