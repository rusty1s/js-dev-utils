const merge = require('webpack-merge');

const resolve = require('../helper/resolve');

const common = resolve('webpack.common');
const prod = resolve('webpack.prod');

module.exports = merge(common, prod);
