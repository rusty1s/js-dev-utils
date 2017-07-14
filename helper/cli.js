const path = require('path');
const { spawnSync } = require('child_process');

const { getRoot } = require('./resolve');

const getArgs = () => process.argv.slice(2);

// TODO: Default props.
const run = (cmd, args = []) =>
  spawnSync('node', [path.join(getRoot(), 'node_modules', '.bin', cmd), ...args], {
    stdio: 'inherit',
  }).status;

module.exports = { getArgs, run };
