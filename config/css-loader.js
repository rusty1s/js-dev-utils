module.exports = [
  {
    loader: 'css-loader',
    options: {
      modules: true,
      minimize: true,
      importLoaders: 1,
      localIdentName: '[name]__[local]___[hash:base64:5]',
    },
  },
  'postcss-loader',
];
