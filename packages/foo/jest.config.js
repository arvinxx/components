const base = require('../../jest.config.base');

const packageName = '@arvinxu/modules-foo';

const root = '<rootDir>/packages/foo';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
};
