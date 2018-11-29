import {Router} from 'express';
import createControllerRoutes from './utils/create-controller';
import swagger from './modules';

export default function createRouter({config, logger}) {
  const router = Router();
  const apiRouter = Router();

  apiRouter.use('/user', createControllerRoutes('user'));

  router.use('/api', apiRouter);
  router.use('/docs', swagger());

  return router;
}
