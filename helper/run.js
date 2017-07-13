const path = require('path');
const { spawnSync } = require('child_process');

const { getRoot } = require('./process');

const run = (cmd, args = []) =>
  spawnSync('node', [path.join(getRoot(), 'node_modules', '.bin', cmd), ...args], {
    stdio: 'inherit',
  }).status;

module.exports = run;
