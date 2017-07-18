const path = require("path");
// const { spawnSync } = require("child_process");

const { getRoot, resolve } = require("./resolve");

test("get root directory", () => {
  expect(getRoot()).toBe(path.join(__dirname, ".."));
});

test("resolve", () => {
  expect(resolve("babelrc")).toBe(require.resolve("../config/babelrc"));
});
