'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profileId: {
        type: Sequelize.INTEGER
      },
      customerContactId: {
        type: Sequelize.INTEGER
      },
      fullAddress: {
        type: Sequelize.STRING
      },
      streetAddress: {
        type: Sequelize.STRING
      },
      streetName: {
        type: Sequelize.STRING
      },
      streetPrefix: {
        type: Sequelize.STRING
      },
      streetSuffix: {
        type: Sequelize.STRING
      },
      secondaryAddress: {
        type: Sequelize.STRING
      },
      county: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      zipCode: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      stateAbbr: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => {
      queryInterface.sequelize.query(`
         INSERT addresses (profileId, fullAddress, streetAddress, streetName, streetPrefix, streetSuffix, secondaryAddress, county, city, zipCode, state, stateAbbr, createdAt, updatedAt)
         SELECT profileId, fullAddress, streetAddress, streetName, streetPrefix, streetSuffix, secondaryAddress, county, city, zipCode, state, stateAbbr, createdAt, updatedAt
         FROM profileAddresses;
      `);
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('addresses');
  }
};