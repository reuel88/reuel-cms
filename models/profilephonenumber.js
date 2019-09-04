'use strict';
module.exports = (sequelize, DataTypes) => {
  const profilePhoneNumber = sequelize.define('profilePhoneNumber', {
    profileId: DataTypes.INTEGER,
    value: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  profilePhoneNumber.associate = function(models) {
    // associations can be defined here
  };
  return profilePhoneNumber;
};