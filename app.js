const express = require("express");
const loaderInit = require("./api/loaders/init");
const app = express();
require("dotenv").config();

function main() {
  console.log(process.env.NODE_ENV, "환경 입니다.");
  loaderInit(app);
}

main();
