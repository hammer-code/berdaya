// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';
import container from '../src/container';

const server = container.resolve('server');
const database = container.resolve('database');
const config = container.resolve('config');
const logger = container.resolve('logger');

/**
 * turn off logger since we are testing on winston
 */
logger.transports.console.silent = true; // turns off
logger.transports.file.silent = true; // turns off

export default function setup() {
  return {
    app: container,
    database,
    request: request(server.app),
    config,
  };
}
