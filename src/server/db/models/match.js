module.exports = (sequelize, DataTypes) => {
  const match = sequelize.define(
    'match',
    {
      teamAId: DataTypes.UUID,
      teamBId: DataTypes.UUID,
      date: DataTypes.DATE
    },
    {}
  );
  match.associate = function (models) {
    match.belongsTo(models.team, { as: 'teamA' });
    match.belongsTo(models.team, { as: 'teamB' });
  };
  return match;
};
