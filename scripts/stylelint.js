#!/usr/bin/env node

const {
  addDotfile,
  addIgnoreDotfile,
  removeDotfile,
} = require('../helper/dotfile');
const { getArgs, run } = require('../helper/cli');

addDotfile('stylelintrc');
addIgnoreDotfile('stylelintignore');
const code = run('stylelint', getArgs());
removeDotfile('stylelintignore');
process.exit(code);
