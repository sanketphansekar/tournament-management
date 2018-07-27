import uuidV4 from 'uuid/v4';

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

function savePredictedScore(data) {
  return models.sequelize.transaction((t) => {
    const saveData = data.map(i => ({
      ...i,
      id: uuidV4()
    }));
    return models.predicted_score.bulkCreate(saveData, { transaction: t });
  });
}

export default {
  getAll,
  savePredictedScore
};
