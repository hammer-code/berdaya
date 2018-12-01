import {createContainer, asValue, asFunction} from 'awilix';

import app from './app';
import config from '../config';
import database from './infra/database';
import logger from './infra/logging/logger';
import server from './interfaces/http/server';
import router from './interfaces/http/router';
import * as models from './infra/database/models';

const container = createContainer();

container.register({
  app: asFunction(app).singleton(),
  server: asFunction(server).singleton(),
  router: asFunction(router).singleton(),
  logger: asFunction(logger).singleton(),
  database: asFunction(database).singleton(),
  config: asValue(config),
  models: asValue(models),
});

export default container;
