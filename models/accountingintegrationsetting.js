'use strict';
module.exports = (sequelize, DataTypes) => {
  const accountingIntegrationSetting = sequelize.define('accountingIntegrationSetting', {
    accountingIntegrationId: DataTypes.INTEGER,
    label: DataTypes.STRING,
    value: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN
  }, {});
  accountingIntegrationSetting.associate = function(models) {
    // associations can be defined here
  };
  return accountingIntegrationSetting;
};