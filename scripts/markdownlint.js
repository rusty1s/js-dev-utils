#!/usr/bin/env node

const { addDotfile } = require('../helper/dotfile');
const { getArgs, run } = require('../helper/cli');

addDotfile('markdownlintrc');
const code = run('markdownlint', getArgs());
process.exit(code);
