'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('userSettings', 'userId', {
                type: Sequelize.INTEGER,
                allowNull: false,
            }),
            queryInterface.changeColumn('userSettings', 'label', {
                type: Sequelize.STRING,
                allowNull: false,
            }),
            queryInterface.changeColumn('userSettings', 'value', {
                type: Sequelize.STRING,
                allowNull: false,
            }),
            queryInterface.changeColumn('userSettings', 'enabled', {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            }),
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('userSettings', 'userId', {
                type: Sequelize.INTEGER,
                allowNull: true,
            }),
            queryInterface.changeColumn('userSettings', 'label', {
                type: Sequelize.STRING,
                allowNull: true,
            }),
            queryInterface.changeColumn('userSettings', 'value', {
                type: Sequelize.STRING,
                allowNull: true,
            }),
            queryInterface.changeColumn('userSettings', 'enabled', {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            }),
        ]);
    }
};
