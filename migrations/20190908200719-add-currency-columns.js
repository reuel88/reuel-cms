'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn('currencies', 'unicode', {
                type: Sequelize.STRING
            }),
            queryInterface.addColumn('currencies', 'hex', {
                type: Sequelize.STRING
            }),
            queryInterface.addColumn('currencies', 'html', {
                type: Sequelize.STRING
            }),
        ]);
    },

    down: (queryInterface) => {
        return Promise.all([
            queryInterface.removeColumn('currencies', 'unicode'),
            queryInterface.removeColumn('currencies', 'hex'),
            queryInterface.removeColumn('currencies', 'html'),
        ]);
    }
};
