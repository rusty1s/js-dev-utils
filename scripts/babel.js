#!/usr/bin/env node

const { addDotfile, removeDotfile } = require("../helper/dotfile");
const { getArgs, run } = require("../helper/cli");

const call = args => {
  addDotfile("babelrc");
  const result = run("babel", args);
  removeDotfile("babelrc");
  return result;
};

/* istanbul ignore if */
if (require.main === module) process.exit(call(getArgs()).status);
else module.exports = call;
