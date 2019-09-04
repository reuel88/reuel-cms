'use strict';
module.exports = (sequelize, DataTypes) => {
  const profileAddress = sequelize.define('profileAddress', {
    profileId: DataTypes.INTEGER,
    fullAddress: DataTypes.STRING,
    streetAddress: DataTypes.STRING,
    streetName: DataTypes.STRING,
    streetPrefix: DataTypes.STRING,
    streetSuffix: DataTypes.STRING,
    secondaryAddress: DataTypes.STRING,
    county: DataTypes.STRING,
    city: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    state: DataTypes.STRING,
    stateAbbr: DataTypes.STRING
  }, {});
  profileAddress.associate = function(models) {
    // associations can be defined here
  };
  return profileAddress;
};