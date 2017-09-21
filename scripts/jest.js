#!/usr/bin/env node

const { getArgs, mergeArgs, run } = require('../helper/cli');
const resolve = require('../helper/resolve');

const defaultArgs = ['--config', resolve('jest.config')];

const result = run('jest', mergeArgs(defaultArgs, getArgs()));
process.exit(result.status);
