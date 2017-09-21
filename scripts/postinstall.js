#!/usr/bin/env node

const { addDotfile } = require('../helper/dotfile');

addDotfile('babelrc');
addDotfile('eslintrc');
addDotfile('stylelintrc');
addDotfile('prettierrc');
addDotfile('markdownlintrc');
