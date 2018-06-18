'use strict';
module.exports = (sequelize, DataTypes) => {
  var scoreboard = sequelize.define('scoreboard', {
    score: DataTypes.INTEGER,
    userId: DataTypes.UUID
  }, {});
  scoreboard.associate = function(models) {
    // associations can be defined here
  };
  return scoreboard;
};