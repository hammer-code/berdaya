const path = require('path');

require('dotenv').load({
  path: path.resolve(__dirname, '../.env'),
});

const config = {
  port: process.env.PORT || 3000,
  env: 'development',
  logging: {
    maxsize: 100 * 1024, // 100mb
    maxFiles: 2,
    colorize: false,
  },
  db: {
    uri: process.env.MONGODB_URI,
  },
};

module.exports = config;
