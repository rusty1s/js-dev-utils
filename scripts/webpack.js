#!/usr/bin/env node

const path = require('path');

const { addDotfile } = require('../helper/dotfile');
const { getArgs, mergeArgs, run } = require('../helper/cli');

const [env, ...args] = getArgs();

const defaultArgs = ['--config', path.join(__dirname, '..', 'webpack', env)];

addDotfile('babelrc');
const code = run('webpack', mergeArgs(defaultArgs, args));
process.exit(code);
