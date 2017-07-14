#!/usr/bin/env node

const { getArgs, mergeArgs, run } = require("../helper/cli");
const { resolve } = require("../helper/resolve");

const defaultArgs = ["--config", resolve("webpack.common")];

const code = run("webpack", mergeArgs(defaultArgs, getArgs()));
process.exit(code);
