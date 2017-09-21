const resolve = require('../helper/resolve');

const prettier = require(resolve('prettierrc'));

module.exports = {
  extends: ['airbnb', 'prettier'],
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
