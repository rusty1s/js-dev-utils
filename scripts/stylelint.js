#!/usr/bin/env node

const { addDotfile, removeDotfile } = require('../helper/dotfile');
const { getArgs, run } = require('../helper/cli');

addDotfile('stylelintrc');
addDotfile('stylelintignore');
const code = run('stylelint', getArgs());
removeDotfile('stylelintignore');
process.exit(code);
