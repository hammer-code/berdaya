import {Router} from 'express';
import {partialRight} from 'ramda';
import swagger from './modules';
import httpLogger from './middlewares/http-logger';
import errorHandler from './middlewares/error-handler';
import createControllerRoutes from './utils/create-controller';

export default function createRouter({config, logger}) {
  const router = Router();

  if (config.env !== 'test') {
    router.use(httpLogger(logger));
  }

  const apiRouter = Router();

  apiRouter.use('/user', createControllerRoutes('user'));
  apiRouter.use('/event', createControllerRoutes('event'));

  router.use('/api', apiRouter);
  router.use('/docs', swagger());

  router.use(partialRight(errorHandler, [logger, config]));

  return router;
}
