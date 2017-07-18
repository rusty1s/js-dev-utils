const fs = require("fs");
const path = require("path");

const { addDotfile, removeDotfile } = require("./dotfile");

test("add and remove json dotfile", () => {
  const foo = "module.exports = { foo: true};";
  const name = path.join(__dirname, "..", "config", "foo.js");
  fs.writeFileSync(name, foo);

  const dotfile = path.join(__dirname, "..", ".foo");
  addDotfile("foo");
  expect(fs.existsSync(dotfile)).toBeTruthy();

  expect(fs.readFileSync(dotfile, "utf8")).toBe('{\n  "foo": true\n}');

  removeDotfile("foo");
  expect(fs.existsSync(dotfile)).toBeFalsy();
  fs.unlinkSync(name);
});
