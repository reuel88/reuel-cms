'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('customerDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      accountingIntegrationId: {
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      businessNumber: {
        type: Sequelize.STRING
      },
      isCompany: {
        type: Sequelize.BOOLEAN
      },
      parentCustomerDetailId: {
        type: Sequelize.INTEGER
      },
      creditLimit: {
        type: Sequelize.INTEGER
      },
      creditTerms: {
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
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('customerDetails');
  }
};