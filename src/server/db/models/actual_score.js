'use strict';
module.exports = (sequelize, DataTypes) => {
  var actual_score = sequelize.define('actual_score', {
    matchId: DataTypes.UUID,
    teamAScore: DataTypes.INTEGER,
    teamBScore: DataTypes.INTEGER,
    winnerTeamId: DataTypes.INTEGER
  }, {});
  actual_score.associate = function(models) {
    // associations can be defined here
  };
  return actual_score;
};