const uuidV4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        defaultValue: uuidV4(),
        primaryKey: true,
        type: Sequelize.UUID
      },
      teamAId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      teamBId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      date: {
        type: Sequelize.DATE
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('matches')
};
