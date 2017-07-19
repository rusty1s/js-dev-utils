const babel = require("../../scripts/babel");

test("test babel", () => {
  console.log(process.cwd());
  const result = babel(["src"]);

  expect(result.status).toBe(0);
  expect(result.stderr).toBe("");
  expect(result.stdout).toContain("use strict");
});
