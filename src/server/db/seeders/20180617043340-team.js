const models = require('../models');
const data = require('../seed-data/team');

module.exports = {
  up: (queryInterface, Sequelize) => models.team.bulkCreate(data),
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
