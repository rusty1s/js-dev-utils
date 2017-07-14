const fs = require("fs");
const path = require("path");

const { getRoot, resolve } = require("./resolve");

const addDotfile = name =>
  fs.writeFileSync(
    path.join(getRoot(), `.${name}`),
    JSON.stringify(resolve(name), null, 2)
  );

const removeDotfile = name => fs.unlinkSync(path.join(getRoot(), `.${name}`));

module.exports = { addDotfile, removeDotfile };
