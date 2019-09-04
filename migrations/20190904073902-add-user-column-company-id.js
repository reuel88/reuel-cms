'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'companyId', {
      type:Sequelize.INTEGER
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'companyId');
  }
};
