'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface
            .addColumn('users', 'status', {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: 'active'
            })
            .then(() => {
                queryInterface.sequelize.query(`
                    UPDATE users 
                    SET status = CASE
                        WHEN active=1 THEN 'active'
                        ELSE 'inactive'
                    END;
                `);
            });

    },

    down: (queryInterface) => {
        return queryInterface.removeColumn('users', 'status');
    }
};
