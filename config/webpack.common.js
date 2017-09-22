const fs = require('fs');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const getRoot = require('../helper/root');

const getEntry = () => {
  const entries = [
    'demo/index.jsx',
    'demo/index.js',
    'src/index.jsx',
    'src/index.js',
    'index.jsx',
    'index.js',
  ];

  let entry;

  entries.forEach(e => {
    const filepath = path.join(getRoot(), e);
    if (fs.existsSync(filepath)) entry = `./${e}`;
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
