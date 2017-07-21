const fs = require("fs");
const path = require("path");

const finder = require("find-package-json");

const getRoot = () => finder(process.cwd()).next().value;

const resolve = name => {
  // Look up config in root directory to check for overridden files.
  const filename = path.join(getRoot(), "config", `${name}.js`);
  if (fs.existsSync(filename)) return filename;

  // Resolve standard configuration if config hasn't been overridden.
  return path.join(__dirname, "..", "config", `${name}.js`);
};

module.exports = { getRoot, resolve };
