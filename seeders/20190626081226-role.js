'use strict';

module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('roles', [
            {
                roleName: 'god',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                roleName: 'admin',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                roleName: 'user',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    },

    down: (queryInterface) => {
        return queryInterface.bulkDelete('roles', null, {});
    }
};
