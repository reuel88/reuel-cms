'use strict';
module.exports = (sequelize, DataTypes) => {
  const customerContact = sequelize.define('customerContact', {
    customerDetailId: DataTypes.INTEGER,
    fullName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {});
  customerContact.associate = function(models) {
    // associations can be defined here
  };
  return customerContact;
};