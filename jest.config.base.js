const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  verbose: true,
  moduleNameMapper: {
    '@arvinxu/float-label-input': '<rootDir>/packages/float-label-input/src',
  },
  rootDir: path.resolve(__dirname, '.'),
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
