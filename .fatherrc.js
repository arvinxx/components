module.exports = {
  entry: 'src/index.ts',
  cjs: 'babel',
  esm: 'babel',
  target: 'node',
  extraBabelPlugins: ['add-module-exports'],
};
