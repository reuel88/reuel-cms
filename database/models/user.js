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

      user.belongsToMany(models.role, {
          through: 'userRole',
          as: 'roles',
          foreignKey: 'userId'
      })
  };
  return user;
};