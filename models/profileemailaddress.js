'use strict';
module.exports = (sequelize, DataTypes) => {
  const profileEmailAddress = sequelize.define('profileEmailAddress', {
    profileId: DataTypes.INTEGER,
    label: DataTypes.STRING, // (home, work, etc)
    email: DataTypes.STRING
  }, {});
  profileEmailAddress.associate = function(models) {
    // associations can be defined here
  };
  return profileEmailAddress;
};