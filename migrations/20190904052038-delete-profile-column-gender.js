'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('profiles', 'gender');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('profiles', 'gender', {
      type: Sequelize.STRING
    }).then(() => {
      queryInterface.sequelize.query(`
                    UPDATE profiles
                    SET  gender = sex;
                `);
    })
  }
};
