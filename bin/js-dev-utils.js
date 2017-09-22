#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const getScripts = () =>
  fs
    .readdirSync(path.join(__dirname, '../scripts'))
    .map(filename => filename.replace(/\..+$/, ''))
    .sort();

const call = (script, args) =>
  spawnSync('node', [require.resolve(`../scripts/${script}.js`), ...args], {
    stdio: 'inherit',
    encoding: 'utf-8',
  }).status;

/* istanbul ignore if */
if (require.main === module) {
  // Called as CLI.
  const script = process.argv[2] || '';

  if (!getScripts().includes(script)) {
    console.error(`"${script}" doesn't exist`);
    process.exit(1);
  }
  const code = call(script, process.argv.slice(3));
  process.exit(code);
} else {
  module.exports = { getScripts, call };
}
