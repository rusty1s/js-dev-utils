#!/usr/bin/env node

const { addDotfile, removeDotfile } = require('../helper/dotfile');
const { getArgs, run } = require('../helper/cli');

const defaultOptions = ['--ext', 'js,jsx,es6', '--cache'];

addDotfile('eslintrc');
addDotfile('eslintignore');
const code = run('eslint', getArgs());
removeDotfile('eslintignore');
process.exit(code);
