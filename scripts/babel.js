#!/usr/bin/env node

const { addDotfile } = require('../helper/dotfile');
const { getArgs, run } = require('../helper/cli');

addDotfile('babelrc');
const code = run('babel', getArgs());
process.exit(code);

/* istanbul ignore if */
// if (require.main === module) process.exit(call(getArgs()).status);
// else module.exports = call;
