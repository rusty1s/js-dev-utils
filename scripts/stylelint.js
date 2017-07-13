#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const resolve = require('../helper/resolve');
const { getRoot, getArgs } = require('../helper/process');
const toJSON = require('../helper/json');
const run = require('../helper/run');

const config = resolve('stylelintrc');
const filepath = path.join(getRoot(), '.stylelintrc');
fs.writeFileSync(filepath, toJSON(config));
const code = run('stylelint', getArgs());
process.exit(code);
