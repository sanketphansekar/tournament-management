'use strict';
module.exports = (sequelize, DataTypes) => {
  var predicted_score = sequelize.define('predicted_score', {
    matchId: DataTypes.UUID,
    teamAScore: DataTypes.INTEGER,
    teamBScore: DataTypes.INTEGER,
    userId: DataTypes.UUID,
    winnerTeamId: DataTypes.INTEGER
  }, {});
  predicted_score.associate = function(models) {
    // associations can be defined here
  };
  return predicted_score;
};