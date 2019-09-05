'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('phoneNumbers', {
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
      value: {
        type: Sequelize.STRING
      },
      type: {
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
         INSERT phoneNumbers (profileId, value, type, createdAt, updatedAt)
         SELECT profileId, value, type, createdAt, updatedAt
         FROM profilePhoneNumbers;
      `);
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('phoneNumbers');
  }
};