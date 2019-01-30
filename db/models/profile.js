'use strict';
module.exports = (sequelize, DataTypes) => {
  const profile = sequelize.define('profile', {
    userId: DataTypes.INTEGER,
    fullName: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    gender: DataTypes.STRING
  }, {});
  profile.associate = function(models) {
    // associations can be defined here
  };
  return profile;
};