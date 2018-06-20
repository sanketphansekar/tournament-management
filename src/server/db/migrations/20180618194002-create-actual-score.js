const uuidV4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('actual_scores', {
      id: {
        allowNull: false,
        defaultValue: uuidV4(),
        primaryKey: true,
        type: Sequelize.UUID
      },
      matchId: {
        type: Sequelize.UUID
      },
      teamAScore: {
        type: Sequelize.INTEGER
      },
      teamBScore: {
        type: Sequelize.INTEGER
      },
      winnerTeamId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('actual_scores')
};
