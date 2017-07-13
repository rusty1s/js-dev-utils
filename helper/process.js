const getRoot = () => process.cwd();
const getArgs = () => process.argv.slice(2);

module.exports = {
  getRoot,
  getArgs,
};
