const uuidV4 = require('uuid/v4');
const models = require('../models');
const data = require('../seed-data/users');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const insertData = data.map(i => ({
      id: uuidV4(),
      name: i.res_name
    }));
    return models.user.bulkCreate(insertData);
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Person', null, {})
};
