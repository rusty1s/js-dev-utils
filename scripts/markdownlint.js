#!/usr/bin/env node

const { addDotfile, removeDotfile } = require('../helper/dotfile');
const { getArgs, run } = require('../helper/cli');

addDotfile('markdownlintrc');
const code = run('markdownlint', getArgs());
removeDotfile('markdownlintrc');
process.exit(code);
