const path = require("path");
const { spawnSync } = require("child_process");

const { getScripts, call } = require("./dev-utils");

test("get scripts", () => {
  const scripts = getScripts();

  expect(scripts).toHaveLength(7);
  expect(scripts).toMatchObject([
    "babel",
    "eslint",
    "jest",
    "markdownlint",
    "postinstall",
    "stylelint",
    "webpack"
  ]);
});

test("call script", () => {
  const result = call("babel", ["foo.js"]);

  expect(result.status).toBeGreaterThan(0);
});

test("call with empty script", () => {
  const result = spawnSync("node", [path.join(__dirname, "dev-utils.js")], {
    stdio: "pipe",
    encoding: "utf-8"
  });

  expect(result.status).toBe(1);
  expect(result.stdout).toBe("");
  expect(result.stderr).toBe('"" doesn\'t exist\n');
});

test("call with wrong script", () => {
  const result = spawnSync(
    "node",
    [path.join(__dirname, "dev-utils.js"), "unknown"],
    { stdio: "pipe", encoding: "utf-8" }
  );

  expect(result.status).toBe(1);
  expect(result.stdout).toBe("");
  expect(result.stderr).toBe('"unknown" doesn\'t exist\n');
});
