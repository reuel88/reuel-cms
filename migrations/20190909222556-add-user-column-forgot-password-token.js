'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('users', 'forgotPasswordToken', {
            type: Sequelize.STRING
        });
    },

    down: (queryInterface) => {
        return queryInterface.removeColumn('users', 'forgotPasswordToken');
    }
};
