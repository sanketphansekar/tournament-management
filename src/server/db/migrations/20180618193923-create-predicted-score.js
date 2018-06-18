const uuidV4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('predicted_scores', {
      id: {
        allowNull: false,
        defaultValue: uuidV4(),
        primaryKey: true,
        type: Sequelize.UUID
      },
      matchId: {
        type: Sequelize.UUID,
        references: {
          model: 'matches',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      teamAScore: {
        type: Sequelize.INTEGER
      },
      teamBScore: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.UUID,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('predicted_scores')
};
