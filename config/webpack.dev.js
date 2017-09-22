const path = require('path');

const webpack = require('webpack');

const resolve = require('../helper/resolve');
const getRoot = require('../helper/root');

const cssLoader = require(resolve('css-loader'));

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', ...cssLoader],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(getRoot(), 'dist'),
    port: 3000,
    hot: true,
  },
};
