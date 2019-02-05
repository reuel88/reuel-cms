'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface
            .addColumn('users', 'lastLogin', {
                type: Sequelize.DATE
            });
    },

    down: (queryInterface) => {
        return queryInterface
            .removeColumn('users', 'lastLogin');
    }
};
