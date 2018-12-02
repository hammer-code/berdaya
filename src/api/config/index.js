const path = require('path');

require('dotenv').load({
  path: path.resolve(__dirname, '../.env'),
});

const ENV = process.env.NODE_ENV || 'development';

const config = {
  port: process.env.PORT || 3000,
  env: ENV,
  logging: {
    maxsize: 100 * 1024, // 100mb
    maxFiles: 2,
    colorize: false,
  },
  db: {
    uri:
      ENV === 'test' ? process.env.MONGODB_TEST_URI : process.env.MONGODB_URI,
  },
};

module.exports = config;
