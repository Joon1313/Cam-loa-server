const express = require("express");
const loaderInit = require("./api/loaders/init.local");
const app = express();

async function main() {
  await loaderInit(app);
  app.listen(3000, () => {
    console.log("start server");
  });
}

main();
