const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const resolve = require('../helper/resolve');

const cssLoader = require(resolve('css-loader'));

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: cssLoader,
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};
