const path = require("path");

const BASE_JS = "./src/client/js/";

module.exports = {
  mode: "development",
  watch: true,
  entry: {
    main: BASE_JS + "main.js",
  },
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "js/[name].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
