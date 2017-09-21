const fs = require('fs');
const path = require('path');

const getRoot = require('./root');
const resolve = require('./resolve');

const addDotfile = name =>
  fs.writeFileSync(
    path.join(getRoot(), `.${name}`),
    JSON.stringify(require(resolve(name)), null, 2)
  );

const addIgnoreDotfile = name =>
  fs.writeFileSync(
    path.join(getRoot(), `.${name}`),
    require(resolve(name)).reduce((prev, entry) => `${prev}\n${entry}`)
  );

const removeDotfile = name => fs.unlinkSync(path.join(getRoot(), `.${name}`));

module.exports = { addDotfile, addIgnoreDotfile, removeDotfile };
