const path = require('path');
const { spawnSync } = require('child_process');

const parse = require('yargs-parser');

const { getRoot } = require('./resolve');

const getArgs = () => process.argv.slice(2);

const mergeArgs = (...args) => {
  const allArgs = [].concat(...args);
  const mergedArgs = Object.assign(...args.map(a => parse(a)));

  return Object.keys(mergedArgs).reduce((acc, key) => {
    const value = mergedArgs[key];

    if (key === '_') return [...acc, ...value];

    let newKey = key;
    if (allArgs.includes(`-${key}`)) newKey = `-${key}`;
    if (allArgs.includes(`--${key}`)) newKey = `--${key}`;

    const arg = typeof value === 'boolean' ? [newKey] : [newKey, value];
    return [...acc, ...arg];
  }, []);
};

const run = (cmd, args = []) =>
  spawnSync('node', [path.join(getRoot(), 'node_modules', '.bin', cmd), ...args], {
    stdio: 'inherit',
  }).status;

module.exports = { getArgs, mergeArgs, run };
