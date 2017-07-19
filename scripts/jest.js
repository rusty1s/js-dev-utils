#!/usr/bin/env node

const { getArgs, run } = require("../helper/cli");

const result = run("jest", getArgs());
process.exit(result.status);
