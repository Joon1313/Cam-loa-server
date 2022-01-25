const path = require("path");

function greenlockInit(app) {
  require("greenlock-express")
    .init({
      packageRoot: path.resolve(__dirname, "../../../"),
      configDir: "./greenlock.d",
      maintainerEmail: process.env.GREENLOCK_EMAIL,
      cluster: false,
    })
    .serve(app);
  console.log("GreenLock Start");
}

module.exports = greenlockInit;
