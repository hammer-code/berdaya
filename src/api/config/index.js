const config = {
  port: 3000,
  env: 'development',
  logging: {
    maxsize: 100 * 1024, // 100mb
    maxFiles: 2,
    colorize: false,
  },
};

module.exports = config;
