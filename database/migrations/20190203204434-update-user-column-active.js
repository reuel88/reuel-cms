'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        // return Promise.all([
        //     queryInterface.addColumn('users', 'status', {
        //         type: Sequelize.STRING,
        //         allowNull: false
        //     }),
        //     queryInterface.removeColumn('users', 'active')
        // ]);

    },

    down: (queryInterface, Sequelize) => {
        // return Promise.all([
        //     queryInterface.addColumn('users', 'active', {
        //         type:Sequelize.BOOLEAN,
        //         allowNull: false,
        //         defaultValue: true
        //     }),
        //     queryInterface.removeColumn('users', 'status')
        // ]);
    }
};
