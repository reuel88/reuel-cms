'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('accountingIntegrationSettings', 'companyId', {
        type: Sequelize.INTEGER
      }),
      queryInterface.addColumn('addresses', 'companyId', {
        type: Sequelize.INTEGER
      }),
      queryInterface.addColumn('customerContacts', 'companyId', {
        type: Sequelize.INTEGER
      }),
      queryInterface.addColumn('emailAddresses', 'companyId', {
        type: Sequelize.INTEGER
      }),
      queryInterface.addColumn('phoneNumbers', 'companyId', {
        type: Sequelize.INTEGER
      }),
      queryInterface.addColumn('profiles', 'companyId', {
        type: Sequelize.INTEGER
      }),
      queryInterface.addColumn('userSettings', 'companyId', {
        type: Sequelize.INTEGER
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('accountingIntegrationSettings', 'companyId'),
      queryInterface.removeColumn('addresses', 'companyId'),
      queryInterface.removeColumn('customerContacts', 'companyId'),
      queryInterface.removeColumn('emailAddresses', 'companyId'),
      queryInterface.removeColumn('phoneNumbers', 'companyId'),
      queryInterface.removeColumn('profiles', 'companyId'),
      queryInterface.removeColumn('userSettings', 'companyId'),
    ]);
  }
};
