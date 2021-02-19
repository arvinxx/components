const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  verbose: true,
  moduleNameMapper: {
    '@arvinxu/modules-foo': '<rootDir>/packages/foo/src',
    '@arvinxu/modules-bar': '<rootDir>/packages/bar/src',
  },
  rootDir: path.resolve(__dirname, '.'),
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
