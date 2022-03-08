const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
  plugins: ['prettier-plugin-style-order'],
};
