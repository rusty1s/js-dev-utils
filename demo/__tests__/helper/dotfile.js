const fs = require('fs');
const path = require('path');

const { addDotfile, removeDotfile } = require('../../../helper/dotfile');
const { getRoot } = require('../../../helper/resolve');

test('add and remove json dotfile', () => {
  const dir = path.join(getRoot(), 'config');
  const exists = fs.existsSync(dir);
  if (!exists) fs.mkdirSync(dir);

  const filename = path.join(dir, 'foo.js');
  fs.writeFileSync(filename, 'module.exports = { foo: true };');

  addDotfile('foo');

  const dotfile = path.join(getRoot(), '.foo');
  expect(fs.existsSync(dotfile)).toBeTruthy();

  expect(fs.readFileSync(dotfile, 'utf8')).toBe('{\n  "foo": true\n}');

  removeDotfile('foo');
  expect(fs.existsSync(dotfile)).toBeFalsy();

  fs.unlinkSync(filename);
  if (!exists) fs.rmdirSync(dir);
});
