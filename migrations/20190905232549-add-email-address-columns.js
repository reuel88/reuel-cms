'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise
            .all([
                queryInterface.addColumn('emailAddresses', 'profileId', {
                    type: Sequelize.STRING
                }),
                queryInterface.addColumn('emailAddresses', 'customerContactId', {
                    type: Sequelize.STRING
                }),
                queryInterface.addColumn('emailAddresses', 'label', {
                    type: Sequelize.STRING
                }),
            ])
            .then(() => {
                queryInterface.sequelize.query(`
                    INSERT emailAddresses (profileId, label, email, createdAt, updatedAt)
                    SELECT profileId, label, email, createdAt, updatedAt
                    FROM profileEmailAddresses;
                `);
            });
    },

    down: (queryInterface) => {
        return Promise.all([
            queryInterface.removeColumn('emailAddresses', 'profileId'),
            queryInterface.removeColumn('emailAddresses', 'customerContactId'),
            queryInterface.removeColumn('emailAddresses', 'label'),
        ]);
    }
};
