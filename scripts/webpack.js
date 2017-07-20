#!/usr/bin/env node

const { getArgs, mergeArgs, run } = require("../helper/cli");
const { resolve } = require("../helper/resolve");

const [env, ...args] = getArgs();

const defaultArgs = ["--config", resolve(`webpack.${env}`)];

const code = run("webpack", mergeArgs(defaultArgs, args));
process.exit(code);
