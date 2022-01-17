const express = require("express");
const loaderInit = require("./api/loaders/init");
const app = express();

async function main() {
  await loaderInit(app);
}

main();
