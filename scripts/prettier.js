#!/usr/bin/env node

const { addDotfile } = require('../helper/dotfile');
const { getArgs, mergeArgs, run } = require('../helper/cli');

const defaultArgs = ['--write'];

addDotfile('prettierrc');
const code = run('prettier', mergeArgs(defaultArgs, getArgs()));
process.exit(code);
