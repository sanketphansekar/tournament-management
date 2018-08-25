import Express from 'express';

import matchesController from '../controllers/matches';
import usersController from '../controllers/users';

const router = Express.Router();

/**
 *
 * @api {GET} /api/matches Get all matches
 * @apiName Match
 * @apiGroup Matches
 * @apiVersion  0.0.1
 *
 *
 * @apiParam  {String} paramName description
 * @apiParam  {String} paramName2 description
 *
 * @apiSuccess (200) {type} name description
 *
 * @apiParamExample  {type} Request-Example:
 * {
 *     property : value
 * }
 *
 *
 * @apiSuccessExample {type} Success-Response:
 * {
 *     property : value
 * }
 *
 *
 */
router.get('/matches', (_req, res, next) =>
  matchesController
    .getAll()
    .then(result => res.status(200).send(result))
    .catch((err) => {
      next(err);
    }));

router.get('/users', (req, res, next) => {
  usersController
    .getAll()
    .then(result => res.status(200).send(result))
    .catch((err) => {
      next(err);
    });
});

router.post('/predicted-scores', (req, res, next) => {
  matchesController
    .savePredictedScore(req.body)
    .then(result => res.status(200).send(result))
    .catch((err) => {
      next(err);
    });
});

export default router;
