const base = require('../../jest.config.base');

const packageName = '@arvinxu/page-loading';

const root = '<rootDir>/packages/page-loading';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
};
