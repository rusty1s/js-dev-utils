const babelrc = require('./config/babelrc');
const eslintrc = require('./config/eslintrc');
const eslintignore = require('./config/eslintignore');
const prettierrc = require('./config/prettierrc');
const stylelintrc = require('./config/stylelintrc');
const stylelintignore = require('./config/stylelintignore');
const common = require('./config/webpack.common');
const dev = require('./config/webpack.dev');
const prod = require('./config/webpack.prod');
const postcss = require('./config/postcss.config');

module.exports = {
  babelrc,
  eslintrc,
  eslintignore,
  prettierrc,
  stylelintrc,
  stylelintignore,
  webpack: { common, dev, prod },
  postcss,
};
