const config = {
  webServer: {
    command: 'serve -l 5000 -s build',
    port: 5000,
    timeout: 120 * 1000,
  },
};

module.exports = config;
