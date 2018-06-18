module.exports = (sequelize, DataTypes) => {
  const team = sequelize.define(
    'team',
    {
      name: DataTypes.TEXT,
      fifaCode: DataTypes.TEXT,
      iso2: DataTypes.TEXT,
      flag: DataTypes.TEXT,
      emoji: DataTypes.TEXT
    },
    {}
  );
  team.associate = function (models) {
    // associations can be defined here
  };
  return team;
};
