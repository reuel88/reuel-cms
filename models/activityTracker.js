'use strict';
module.exports = (sequelize, DataTypes) => {
  const activityTracker = sequelize.define('activityTracker', {
    userId: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER,
    statusCode: DataTypes.INTEGER,
    statusMessage: DataTypes.STRING,
    headers: DataTypes.TEXT,
    body: DataTypes.STRING,
    query: DataTypes.STRING,
    params: DataTypes.STRING,
    url: DataTypes.STRING,
    baseUrl: DataTypes.STRING,
    originalUrl: DataTypes.STRING,
  }, {});
  activityTracker.associate = function(models) {
    // associations can be defined here
  };
  return activityTracker;
};