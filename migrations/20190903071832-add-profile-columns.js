'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn('profiles', 'firstName', {
                type: Sequelize.STRING
            }),
            queryInterface.addColumn('profiles', 'lastName', {
                type: Sequelize.STRING
            }),
            queryInterface.addColumn('profiles', 'sex', {
                type: Sequelize.STRING
            }).then(() => {
                queryInterface.sequelize.query(`
                    UPDATE profiles
                    SET sex = gender;
                `);
            })
        ]);
    },

    down: (queryInterface) => {
        return Promise.all([
            queryInterface.removeColumn('profiles', 'firstName'),
            queryInterface.removeColumn('profiles', 'lastName'),
            queryInterface.removeColumn('profiles', 'sex'),
        ]);
    }
};
