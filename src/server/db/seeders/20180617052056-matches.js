const _ = require('lodash');
const uuidV4 = require('uuid/v4');

const models = require('../models');
const data = require('../seed-data/match');
const team = require('../seed-data/team');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const modifiedData = data.map(i => ({
      id: uuidV4(),
      teamAId: i.home_team.code != 'TBD' ? _.find(team, { fifaCode: i.home_team.code }).id : null,
      teamBId:
        i.away_team.code != 'TBD' ? _.find(team, { fifaCode: i.away_team.code }).id : null || null,
      date: i.datetime
    }));
    return models.match.bulkCreate(modifiedData);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
