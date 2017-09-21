const merge = require('webpack-merge');

const resolve = require('../helper/resolve');

const common = resolve('webpack.common');
const dev = resolve('webpack.dev');

module.exports = merge(common, dev);
