const fs = require("fs");
const path = require("path");

const getRoot = () => process.cwd();

const resolve = name => {
  // Look up config in root directory to check for overridden files.
  const filename = path.join(getRoot(), "config", `${name}.js`);
  if (fs.existsSync(filename)) return filename;

  // Resolve standard configuration if config hasn't been overridden.
  return `../config/${name}`;
};

module.exports = { getRoot, resolve };
