const merge = require('webpack-merge');

const resolve = require('../helper/resolve');

const common = require(resolve('webpack.common'));
const prod = require(resolve('webpack.prod'));

module.exports = merge(common, prod);
