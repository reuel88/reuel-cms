'use strict';

module.exports = {
    up: (queryInterface) => {
        return queryInterface.dropTable('profileEmailAddresses');
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.createTable('profileEmailAddresses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            profileId: {
                type: Sequelize.INTEGER,
            },
            label: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        })
            .then(() => {
                queryInterface.sequelize.query(`
                    INSERT profileEmailAddresses (profileId, label, email, createdAt, updatedAt)
                    SELECT profileId, label, email, createdAt, updatedAt
                    FROM emailAddresses;
                `);
            });
    }
};
