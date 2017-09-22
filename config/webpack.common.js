const fs = require('fs');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const getRoot = require('../helper/root');

const getEntry = () => {
  const entries = [
    'index.js',
    'index.jsx',
    'src/index.js',
    'src/index.jsx',
    'demo/index.js',
    'demo/index.jsx',
  ];

  let entry;
  entries.forEach(e => {
    if (fs.existsSync(path.join(getRoot(), entry))) entry = `./${e}`;
  });
  return entry;
};

module.exports = {
  entry: getEntry(),
  output: {
    filename: 'app.js',
    path: path.join(getRoot(), 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template/index.html',
      inject: 'body',
    }),
  ],
};
