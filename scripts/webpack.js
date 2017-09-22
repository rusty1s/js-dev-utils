#!/usr/bin/env node

const path = require('path');

const { addDotfile } = require('../helper/dotfile');
const { getArgs, mergeArgs, run } = require('../helper/cli');

const [env, ...args] = getArgs();

const defaultArgs = [
  '--config',
  path.join(__dirname, '..', 'webpack', `${env}.js`),
];

addDotfile('babelrc');

let code = 1;

switch (env) {
  case 'dev':
    code = run('webpack-dev-server', mergeArgs(defaultArgs, args));
    break;
  case 'prod':
    code = run('webpack', mergeArgs(defaultArgs, args));
    break;
  default:
    console.error(`"${env}" config doesn't exist for webpack`);
}

process.exit(code);
