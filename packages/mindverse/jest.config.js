const base = require('../../jest.config.base');

const packageName = '@arvinxu/mindverse';

const root = '<rootDir>/packages/mindverse';

module.exports = {
    ...base,
    rootDir: '../..',
    roots: [root],
    name: packageName,
    displayName: packageName,
    collectCoverageFrom: [`${root}/src/**/*.tsx`, `${root}/src/**/*.ts`],
};

