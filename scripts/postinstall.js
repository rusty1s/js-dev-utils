#!/usr/bin/env node

const { addDotfile } = require('../helper/dotfile');

addDotfile('eslintrc');
addDotfile('stylelintrc');
addDotfile('prettierrc');
addDotfile('markdownlintrc');
