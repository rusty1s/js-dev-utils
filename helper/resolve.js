const path = require("path");
const fs = require("fs");

const getRoot = () => process.cwd();

const resolve = name => {
  const filename = path.join(getRoot(), "config", `${name}.js`);
  if (fs.existsSync(filename)) return filename;

  return `../config/${name}`;
};

module.exports = { getRoot, resolve };
