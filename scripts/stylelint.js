#!/usr/bin/env node

const { addDotfile, removeDotfile } = require('../helper/dotfile');
const { getArgs } = require('../helper/process');
const run = require('../helper/run');

addDotfile('stylelintrc');
addDotfile('stylelintignore');
const code = run('stylelint', getArgs());
removeDotfile('stylelintignore');
process.exit(code);
