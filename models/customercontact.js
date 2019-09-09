'use strict';
module.exports = (sequelize, DataTypes) => {
  const customerContact = sequelize.define('customerContact', {
    companyId: DataTypes.INTEGER,
    customerDetailId: DataTypes.INTEGER,
    fullName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {});
  customerContact.associate = function(models) {
    customerContact.hasMany(models.address, {
      foreignKey: 'customerContactId',
      as: 'addresses',
    });

    customerContact.hasMany(models.emailAddress, {
      foreignKey: 'customerContactId',
      as: 'emailAddresses',
    });

    customerContact.hasMany(models.phoneNumber, {
      foreignKey: 'customerContactId',
      as: 'phoneNumbers',
    });
  };
  return customerContact;
};