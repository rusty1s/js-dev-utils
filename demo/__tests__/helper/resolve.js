const fs = require('fs');
const path = require('path');

const { getRoot, resolve } = require('../../../helper/resolve');

test('get root directory', () => {
  expect(getRoot()).toBe(path.join(__dirname, '..', '..'));
});

test('resolve base configuration', () => {
  expect(resolve('babelrc')).toBe(require.resolve('../../../config/babelrc'));
});

test('resolve custom configuration', () => {
  const dir = path.join(getRoot(), 'config');
  const exists = fs.existsSync(dir);
  if (!exists) fs.mkdirSync(dir);

  const filename = path.join(dir, 'babelrc.js');
  fs.writeFileSync(filename, 'module.exports = { foo: true };');

  expect(resolve('babelrc')).toBe(filename);

  fs.unlinkSync(filename);
  if (!exists) fs.rmdirSync(dir);
});
