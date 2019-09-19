'use strict';
module.exports = (sequelize, DataTypes) => {
  const accountingType = sequelize.define('accountingType', {
    name: DataTypes.STRING
  }, {});

  accountingType.associate = function(models) {
    // associations can be defined here
  };
  return accountingType;
};