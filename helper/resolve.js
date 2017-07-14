const getRoot = () => process.cwd();

const resolve = name => `../config/${name}`;
// TODO: Needs to check more paths.

module.exports = { getRoot, resolve };
