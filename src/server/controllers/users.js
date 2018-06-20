import models from '../db/models';

function getAll() {
  return models.user.findAll({
    attributes: ['id', 'name'],
    orderBy: [['name', 'asc']]
  });
}

export default {
  getAll
};
