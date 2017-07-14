#!/usr/bin/env node

const { addDotfile, removeDotfile } = require('../helper/dotfile');
const { getArgs } = require('../helper/process');
const run = require('../helper/run');

addDotfile('eslintrc');
addDotfile('eslintignore');
const code = run('eslint', getArgs());
removeDotfile('eslintignore');
process.exit(code);
