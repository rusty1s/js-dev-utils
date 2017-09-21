const babel = require('./config/babelrc');
const cssLoader = require('./config/css-loader');
const eslintignore = require('./config/eslintignore');
const eslint = require('./config/eslintrc');
const jest = require('./config/jest.config');
const markdown = require('./config/markdownlintrc');
const postcss = require('./config/postcss.config');
const prettier = require('./config/prettierrc');
const stylelintignore = require('./config/stylelintignore');
const stylelint = require('./config/stylelintrc');
const common = require('./config/webpack.common');
const dev = require('./config/webpack.dev');
const prod = require('./config/webpack.prod');

module.exports = {
  babel,
  cssLoader,
  eslintignore,
  eslint,
  jest,
  markdown,
  postcss,
  prettier,
  stylelintignore,
  stylelint,
  webpack: { common, dev, prod },
};
