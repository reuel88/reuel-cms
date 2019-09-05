'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.dropTable('profilePhoneNumbers');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.createTable('profilePhoneNumbers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profileId: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
         INSERT profilePhoneNumbers (profileId, value, type, createdAt, updatedAt)
         SELECT profileId, value, type, createdAt, updatedAt
         FROM phoneNumbers;
      `);
    });
  }
};
