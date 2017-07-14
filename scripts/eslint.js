#!/usr/bin/env node

const { addDotfile, removeDotfile } = require('../helper/dotfile');
const { getArgs, mergeArgs, run } = require('../helper/cli');

const defaultArgs = ['--ext', 'js,jsx,es6', '--cache'];

addDotfile('eslintrc');
addDotfile('prettierrc');
addDotfile('eslintignore');
const code = run('eslint', mergeArgs(defaultArgs, getArgs()));
removeDotfile('eslintignore');
process.exit(code);
