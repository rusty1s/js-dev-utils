const Merge = require("webpack-merge");

const { resolve } = require("../helper/resolve");

const config = require(resolve("webpack.common"));

module.exports = Merge(config, {});
