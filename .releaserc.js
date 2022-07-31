module.exports = {
  extends: ['semantic-release-config-gitmoji'],
  branches: ['master', { name: 'beta', prerelease: 'beta' }],
};
