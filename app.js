const express = require("express");
const loaderInit = require("./api/loaders/init");
const app = express();

function main() {
  loaderInit(app);
}

main();
