'use strict';
module.exports = (sequelize, DataTypes) => {
  const userCompany = sequelize.define('userCompany', {
    userId: DataTypes.INTEGER,
    companyid: DataTypes.INTEGER
  }, {});
  userCompany.associate = function(models) {
    // associations can be defined here
  };
  return userCompany;
};