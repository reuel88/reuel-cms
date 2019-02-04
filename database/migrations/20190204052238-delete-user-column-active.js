'use strict';

module.exports = {
    up: (queryInterface) => {
        return queryInterface.removeColumn('users', 'active');
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface
            .addColumn('users', 'active', {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
            })
            .then(() => {
                queryInterface.sequelize.query(`
                    UPDATE users 
                    SET active = CASE
                        WHEN status='active' THEN 1
                        ELSE 0
                    END;
                `);
            });

    }
};
