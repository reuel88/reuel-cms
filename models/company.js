'use strict';
module.exports = (sequelize, DataTypes) => {
  const company = sequelize.define('company', {
    fullName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    businessNumber: {
      type: DataTypes.STRING,
      unique: true,
    },
    isCompany: DataTypes.BOOLEAN
  }, {});
  company.associate = function(models) {
    // associations can be defined here

    company.hasMany(models.accountingIntegration, {
      foreignKey: 'companyId',
      as: 'accountingIntegrations'
    });
  };
  return company;
};