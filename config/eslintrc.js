const resolve = require('../helper/resolve');

module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', resolve('prettierrc')],
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
};
