module.exports = {
  extends: ['semantic-release-config-gitmoji'],
  branches: ['master', { name: 'feat/*', channel: 'beta', prerelease: 'beta' }],
};
