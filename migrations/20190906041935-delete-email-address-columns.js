'use strict';

module.exports = {
  up: (queryInterface) => {
    return Promise
        .all([
            queryInterface.removeColumn('emailAddresses', 'fullName'),
            queryInterface.removeColumn('emailAddresses', 'flag'),
        ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise
        .all([
            queryInterface.addColumn('emailAddresses', 'fullName', {
              type: Sequelize.STRING
            }),
            queryInterface.addColumn('emailAddresses', 'flag',{
              type: Sequelize.BOOLEAN,
              defaultValue: false
            }),
        ]);
  }
};
