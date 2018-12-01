import {Router} from 'express';
import container from '../../../../container';
import eventUseCases from '../../../../app/event';
import createEventRepository from '../../../../infra/repositories/event';

export default function createEventRouter() {
  const router = Router();
  const {models} = container.cradle;
  const {Event: EventModel} = models;
  const eventRepository = createEventRepository(EventModel);
  const getUseCase = eventUseCases.getEvents({eventRepository});

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
   *         type: date-time
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

  return router;
}
