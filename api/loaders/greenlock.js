const dotenv = require("dotenv");
dotenv.config();
const { GREENLOCK_EMAIL } = process.env;

function greenlockInit(app) {
  require("greenlock-express")
    .init({
      packageRoot: "../../../",
      configDir: "./greenlock.d",
      maintainerEmail: GREENLOCK_EMAIL,
      cluster: false,
    })
    .serve(app);
}

module.exports = greenlockInit;
