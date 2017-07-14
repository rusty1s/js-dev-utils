#!/usr/bin/env node

const { addDotfile, removeDotfile } = require("../helper/dotfile");
const { getArgs, run } = require("../helper/cli");

addDotfile("babelrc");
const code = run("babel", getArgs());
removeDotfile("babelrc");
process.exit(code);
