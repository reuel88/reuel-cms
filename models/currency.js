'use strict';
module.exports = (sequelize, DataTypes) => {
  const currency = sequelize.define('currency', {
    country: DataTypes.STRING,
    name: DataTypes.STRING,
    symbol: DataTypes.STRING,
    code: DataTypes.STRING,
    number: DataTypes.STRING
  }, {});
  currency.associate = function(models) {
    // associations can be defined here
  };
  return currency;
};