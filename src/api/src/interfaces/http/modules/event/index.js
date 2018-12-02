import {Router} from 'express';
import httpStatus from 'http-status';
import container from '../../../../container';
import eventUseCases from '../../../../app/event';
import createEventRepository from '../../../../infra/repositories/event';

export default function createEventRouter() {
  const router = Router();
  const {models} = container.cradle;
  const {Event: EventModel} = models;
  const eventRepository = createEventRepository(EventModel);
  const getUseCase = eventUseCases.getEvents({eventRepository});
  const postUseCase = eventUseCases.createEvent({eventRepository});

  /**
   * @swagger
   * definitions:
   *   event:
   *     properties:
   *       id:
   *         type: string
   *         format: uuid
   *       name:
   *         type: string
   *       date:
   *         type: string
   *         format: date-time
   *       venue:
   *         type: string
   *       coordinate:
   *         type: string
   */

  /**
   * @swagger
   * /events:
   *   get:
   *     tags:
   *       - Events
   *     description: Returns a list of events
   *     security:
   *       - JWT: []
   *     responses:
   *       200:
   *         description: An array of events
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/event'
   *       401:
   *        $ref: '#/responses/Unauthorized'
   */
  router.get('/', (request, response) => {
    getUseCase.getAll().then(data => {
      response.json({data});
    });
  });

  /**
   * @swagger
   * /events:
   *   post:
   *     tags:
   *       - Events
   *     description: Create new event
   *     security:
   *       - JWT: []
   *     responses:
   *       200:
   *         description: Created event
   *         schema:
   *           $ref: '#/definitions/event'
   *       401:
   *        $ref: '#/responses/Unauthorized'
   */
  router.post('/', (request, response, next) => {
    const {body} = request;

    postUseCase
      .create(body)
      .then(data => {
        response.status(httpStatus.CREATED).json({event: data});
      })
      .catch(error => {
        if (error.name === 'InputValidation') {
          return response.status(httpStatus.UNPROCESSABLE_ENTITY).json({
            errors: error.data,
          });
        }

        return next(error);
      });
  });

  return router;
}
