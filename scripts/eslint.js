#!/usr/bin/env node

const {
  addDotfile,
  addIgnoreDotfile,
  removeDotfile,
} = require('../helper/dotfile');
const { getArgs, mergeArgs, run } = require('../helper/cli');

const defaultArgs = ['--ext', 'js,jsx', '--cache'];

addDotfile('eslintrc');
addIgnoreDotfile('eslintignore');
const code = run('eslint', mergeArgs(defaultArgs, getArgs()));
removeDotfile('eslintignore');
process.exit(code);
