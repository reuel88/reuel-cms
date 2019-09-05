'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define('customer', {
    companyId: DataTypes.INTEGER
  }, {});
  customer.associate = function(models) {
    // associations can be defined here

    customer.hasMany(models.customerDetail, {
      foreignKey: 'customerId',
      as: 'customerDetails'
    });
  };
  return customer;
};