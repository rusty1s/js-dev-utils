#!/usr/bin/env node

const { addDotfile, removeDotfile } = require('../helper/dotfile');
const { getArgs } = require('../helper/process');
const run = require('../helper/run');

addDotfile('babelrc');
const code = run('babel', getArgs());
removeDotfile('babelrc');
process.exit(code);
