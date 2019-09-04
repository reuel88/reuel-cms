'use strict';
module.exports = (sequelize, DataTypes) => {
  const accountingIntegration = sequelize.define('accountingIntegration', {
    companyId: DataTypes.INTEGER,
    accountingTypeId: DataTypes.INTEGER
  }, {});
  accountingIntegration.associate = function(models) {
    // associations can be defined here

    accountingIntegration.hasOne(models.accountingType, {
      foreignKey: 'id',
      as: 'accountingType',
    });

    accountingIntegration.hasMany(models.accountingIntegrationSetting, {
      foreignKey: 'accountingIntegrationId',
      as: 'accountingIntegrationSetting'
    });
  };
  return accountingIntegration;
};