import {createContainer, asValue, asFunction} from 'awilix';

import app from './app';
import config from '../config';
import logger from './infra/logging/logger';
import server from './interfaces/http/server';
import router from './interfaces/http/router';

const container = createContainer();

container.register({
  app: asFunction(app).singleton(),
  server: asFunction(server).singleton(),
  router: asFunction(router).singleton(),
  logger: asFunction(logger).singleton(),
  config: asValue(config),
});

export default container;
