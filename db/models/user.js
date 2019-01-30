'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});
  user.associate = function(models) {
      user.hasOne(models.profile, {
          foreignKey: 'userId',
          as: 'profile',
      });
      user.hasMany(models.userSetting, {
        foreignKey: 'userId',
        as: 'userSettings'
      });
  };
  return user;
};