import Express from 'express';

import matchesController from '../controllers/matches';

const router = Express.Router();

router.get('/matches', (_req, res, next) =>
  matchesController
    .getAll()
    .then(result => res.status(200).send(result))
    .catch((err) => {
      console.log(err);
      next(err);
    }));

export default router;
