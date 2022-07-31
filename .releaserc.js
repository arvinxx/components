module.exports = {
  extends: ['semantic-release-config-gitmoji'],
  branches: [
    'master',
    {
      name: 'feat/*',
      channel: 'beta',
      // 如果存在多个feat/ prerelease
      prerelease: true,
    },
  ],
};
