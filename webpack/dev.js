const merge = require('webpack-merge');

const resolve = require('../helper/resolve');

const common = require(resolve('webpack.common'));
const dev = require(resolve('webpack.dev'));

module.exports = merge(common, dev);
