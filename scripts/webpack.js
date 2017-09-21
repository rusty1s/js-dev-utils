#!/usr/bin/env node

const path = require('path');

const { getArgs, mergeArgs, run } = require('../helper/cli');

const [env, ...args] = getArgs();

const defaultArgs = ['--config', path.join(__dirname, '..', 'webpack', env)];

const code = run('webpack', mergeArgs(defaultArgs, args));
process.exit(code);
