module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('teams', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      },
      fifaCode: {
        type: Sequelize.STRING
      },
      iso2: {
        type: Sequelize.STRING
      },
      flag: {
        type: Sequelize.STRING
      },
      emoji: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('teams')
};
