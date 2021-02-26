const base = require('../../jest.config.base');

const packageName = '@arvinxu/mindflow';

const root = '<rootDir>/packages/mindflow';

module.exports = {
  ...base,
  // runner: 'jest-electron/runner',
  // testEnvironment: 'jest-electron/environment',
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
};
