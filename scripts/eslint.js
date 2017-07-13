#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const resolve = require('../helper/resolve');
const { getRoot, getArgs } = require('../helper/process');
const toJSON = require('../helper/json');
const run = require('../helper/run');

const config = resolve('eslintrc');
const filepath = path.join(getRoot(), '.eslintrc');
fs.writeFileSync(filepath, toJSON(config));
const code = run('eslint', getArgs());
process.exit(code);
