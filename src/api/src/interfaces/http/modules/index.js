import path from 'path';
import {Router} from 'express';
import httpStatus from 'http-status';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

export default function createSwaggerRouter() {
  const router = Router();

  const swaggerDefinition = {
    info: {
      title: 'hammercode API',
      version: '0.0.1',
      description: 'Available REST endpoints of hammercode restful API',
    },
    host: `${process.env.API_SWAGGER}:${process.env.PORT}/api`,
    basePath: '/',
  };

  const options = {
    swaggerDefinition,

    apis: ['./**/*.js'],
  };

  const swaggerSpec = swaggerJSDoc(options);

  /**
   * @swagger
   * /:
   *   get:
   *     tags:
   *       - Status
   *     description: Returns API status
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: API Status
   *         schema:
   *           $ref: '#/definitions/event'
   */
  router.get('/', (req, res) => {
    res.status(httpStatus.OK).json({status: 'API working'});
  });

  router.get('/swagger.json', (req, res) => {
    res.status(httpStatus.OK).json(swaggerSpec);
  });

  router.use('/api', swaggerUi.serve);
  router.get('/api', swaggerUi.setup(swaggerSpec));

  return router;
}
