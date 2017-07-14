const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const { getRoot, resolve } = require("../helper/resolve");

module.exports = {
  entry: {
    app: "./src/index.jsx",
    vendor: ["react"]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(getRoot(), "dist")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: `babel-loader?${JSON.stringify(require(resolve("babelrc")))}`
      }
    ]
  },
  plugins: [new CleanWebpackPlugin("dist", { root: getRoot() })]
};
