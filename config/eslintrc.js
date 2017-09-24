const resolve = require('../helper/resolve');

const prettier = require(resolve('prettierrc'));

module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettier],
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
};
