const path = require('path');
const { spawnSync } = require('child_process');

const parse = require('yargs-parser');

const getRoot = require('./root');

const getArgs = () => process.argv.slice(2);

const mergeArgs = (...args) => {
  // Merge all arguments.
  const merged = Object.assign(...args.map(a => parse(a)));

  return Object.keys(merged).reduce((acc, key) => {
    let k = key;
    const value = merged[key];

    // Pass values with no given key.
    if (key === '_') return [...acc, ...value];

    // Invert argument if the value is `false`.
    if (typeof value === 'boolean' && !value) k = `no-${k}`;

    // Prepend - or -- to key to reconstruct arguments.
    k = k.length === 1 ? `-${k}` : `--${k}`;

    // Construct single or value argument.
    const arg = typeof value === 'boolean' ? [k] : [k, value];
    return [...acc, ...arg];
  }, []);
};

const run = (cmd, args = [], options = {}) =>
  spawnSync(
    'node',
    [path.join(getRoot(), 'node_modules', '.bin', cmd), ...args],
    Object.assign({}, options, { stdio: 'inherit', encoding: 'utf-8' })
  ).status;

module.exports = { getArgs, mergeArgs, run };
