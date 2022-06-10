const path = require("path");

const BASE_JS = "./src/client/js/";

module.exports = {
  mode: "development",
  entry: {
    main: BASE_JS + "main.js",
  },
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "js/[name].js",
    clean: true,
  },
};
