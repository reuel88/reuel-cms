'use strict';
const roles = require('../config/roles');

module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('roles', [
            {
                roleName: roles.GOD,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                roleName: roles.ADMIN,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                roleName: roles.USER,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    },

    down: (queryInterface) => {
        return queryInterface.bulkDelete('roles', null, {});
    }
};
