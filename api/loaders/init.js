const { mongooseInit } = require("./mongoose");
const expressInit = require("./express");
const greenlockInit = require("./greenlock");
const sentryInit = require("./sentry");

async function loaderInit(app) {
  try {
    if (process.env.NODE_ENV === "production") sentryInit(app);

    expressInit(app);

    if (process.env.NODE_ENV !== "test") await mongooseInit();

    if (process.env.NODE_ENV === "production") greenlockInit(app);

    if (process.env.NODE_ENV === "dev") app.listen(3333);
  } catch (err) {
    console.error(err);
  }
}

module.exports = loaderInit;
