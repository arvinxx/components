module.exports = {
  extends: ['semantic-release-config-gitmoji'],
  branches: [
    'master',
    { name: 'user-panel', channel: 'beta', prerelease: 'beta' },
  ],
};
