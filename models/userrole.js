'use strict';
module.exports = (sequelize, DataTypes) => {
  const userRole = sequelize.define('userRole', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  }, {});
  userRole.associate = function(models) {
    // associations can be defined here
  };
  return userRole;
};