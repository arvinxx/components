const base = require('../../jest.config.base');

const packageName = '@arvinxu/modules-bar';

const root = '<rootDir>/packages/bar';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
};
