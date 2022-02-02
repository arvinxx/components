const base = require('../../jest.config.base');

const packageName = '@arvinxu/sortable-list';

const root = '<rootDir>/packages/sortable-list';

module.exports = {
    ...base,
    rootDir: '../..',
    roots: [root],
    name: packageName,
    displayName: packageName,
    collectCoverageFrom: [`${root}/src/**/*.tsx`, `${root}/src/**/*.ts`],
};

