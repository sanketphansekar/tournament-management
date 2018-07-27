import Express from 'express';

import matchesController from '../controllers/matches';
import usersController from '../controllers/users';

const router = Express.Router();

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
