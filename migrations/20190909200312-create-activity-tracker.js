'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('activityTrackers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      companyId: {
        type: Sequelize.INTEGER
      },
      statusCode: {
        type: Sequelize.INTEGER
      },
      statusMessage: {
        type: Sequelize.STRING
      },
      headers: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.STRING
      },
      query: {
        type: Sequelize.STRING
      },
      params: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      baseUrl: {
        type: Sequelize.STRING
      },
      originalUrl: {
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
    return queryInterface.dropTable('activityTrackers');
  }
};