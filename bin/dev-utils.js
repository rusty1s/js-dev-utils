#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const script = process.argv[2] || "";
const args = process.argv.slice(3);

const scripts = fs
  .readdirSync(path.join(__dirname, "../scripts"))
  .map(filename => filename.replace(/\..+$/, ""))
  .sort();

if (scripts.includes(script)) {
  process.exit(
    spawnSync("node", [require.resolve(`../scripts/${script}.js`), ...args], {
      stdio: "inherit"
    }).status
  );
}

console.error(`Unknown script "${script}".`);
process.exit(1);
