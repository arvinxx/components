const base = require('../../jest.config.base');

const packageName = '@arvinxu/tag-selector';

const root = '<rootDir>/packages/tag-selector';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
};
