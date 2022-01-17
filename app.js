const express = require("express");
const path = require("path");
const port = process.env.PORT || 3333;
const loaderInit = require("./api/loaders/init");
const app = express();

async function main() {
  await loaderInit(app);
  // app.listen(port, () => {
  //   console.log(path.resolve(__dirname, "../index.html"));
  // });
}

main();
