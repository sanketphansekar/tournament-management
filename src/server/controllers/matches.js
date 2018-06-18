import models from '../db/models';

function getAll() {
  return models.match.findAll({
    attributes: ['id', 'date'],
    order: [['date', 'asc']],
    include: [
      {
        attributes: ['id', 'name'],
        model: models.team,
        as: 'teamA'
      },
      {
        attributes: ['id', 'name'],
        model: models.team,
        as: 'teamB'
      }
    ]
  });
}

export default {
  getAll
};
