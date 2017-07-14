const path = require("path");
const { spawnSync } = require("child_process");

const parse = require("yargs-parser");

const { getRoot } = require("./resolve");

const getArgs = () => process.argv.slice(2);

const mergeArgs = (...args) => {
  const merged = Object.assign(...args.map(a => parse(a)));
  console.log(merged);

  return Object.keys(merged).reduce((acc, key) => {
    const value = merged[key];
    if (key === "_") return [...acc, ...value];

    let k = key;
    if (typeof value === "boolean" && !value) k = `no-${k}`;

    k = k.length === 1 ? `-${k}` : `--${k}`;
    const arg = typeof value === "boolean" ? [k] : [k, value];
    return [...acc, ...arg];
  }, []);
};

const run = (cmd, args = []) =>
  spawnSync(
    "node",
    [path.join(getRoot(), "node_modules", ".bin", cmd), ...args],
    {
      stdio: "inherit"
    }
  ).status;

module.exports = { getArgs, mergeArgs, run };
