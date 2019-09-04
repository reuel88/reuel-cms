'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('accountingIntegrationSettings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      accountingIntegrationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      label: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.STRING
      },
      enabled: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('accountingIntegrationSettings');
  }
};