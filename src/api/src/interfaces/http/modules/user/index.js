import {Router} from 'express';

export default function createUserRouter() {
  const router = Router();

  router.get('/', (request, response) => {
    response.json({
      message: 'User index goes here',
    });
  });

  return router;
}
