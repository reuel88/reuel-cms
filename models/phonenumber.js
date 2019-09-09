'use strict';
module.exports = (sequelize, DataTypes) => {
  const phoneNumber = sequelize.define('phoneNumber', {
    companyId: DataTypes.INTEGER,
    profileId: DataTypes.INTEGER,
    customerContactId: DataTypes.INTEGER,
    value: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  phoneNumber.associate = function(models) {
    // associations can be defined here
  };
  return phoneNumber;
};