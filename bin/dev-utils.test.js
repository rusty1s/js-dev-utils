const path = require("path");
const { spawnSync } = require("child_process");

test("blabla", () => {
  const result = spawnSync("node", [path.join(__dirname, "dev-utils.js")], {
    stdio: "pipe",
    encoding: "utf-8"
  });

  expect(result.status).toBe(1);
  expect(result.stdout).toBe("");
  expect(result.stderr).toBe('Unknown script "".');
});

test("blabla", () => {
  const result = spawnSync(
    "node",
    [path.join(__dirname, "dev-utils.js"), "unknown"],
    { stdio: "pipe", encoding: "utf-8" }
  );

  expect(result.status).toBe(1);
  expect(result.stdout).toBe("");
  expect(result.stderr).toBe('Unknown script "unknown".');
});
