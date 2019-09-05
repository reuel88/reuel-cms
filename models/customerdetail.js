'use strict';
module.exports = (sequelize, DataTypes) => {
  const customerDetail = sequelize.define('customerDetail', {
    companyId: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER,
    accountingIntegrationId: DataTypes.INTEGER,
    fullName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    businessNumber: DataTypes.STRING,
    isCompany: DataTypes.BOOLEAN,
    parentCustomerDetailId: DataTypes.INTEGER,
    creditLimit: DataTypes.INTEGER,
    creditTerms: DataTypes.STRING
  }, {});
  customerDetail.associate = function(models) {
    // associations can be defined here
  };
  return customerDetail;
};