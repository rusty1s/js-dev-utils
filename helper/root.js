const findRoot = require('find-root');

const getRoot = () => findRoot(process.cwd());

module.exports = getRoot;
