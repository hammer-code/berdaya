import {Router} from 'express';

export default function createUserRouter() {
  const router = Router();

  /**
   * @swagger
   * definitions:
   *   user:
   *     properties:
   *       id:
   *         type: string
   *         format: uuid
   *       name:
   *         type: string
   *       email:
   *         type: string
   *       isVerified:
   *         type: boolean
   */

  /**
   * @swagger
   * /users:
   *   get:
   *     tags:
   *       - Users
   *     description: Returns a list of users
   *     security:
   *       - JWT: []
   *     responses:
   *       200:
   *         description: An array of users
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/user'
   *       401:
   *        $ref: '#/responses/Unauthorized'
   */
  router.get('/', (request, response) => {
    response.json({
      message: 'User index goes here',
    });
  });

  return router;
}
