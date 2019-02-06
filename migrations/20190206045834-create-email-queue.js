'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('emailQueues', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            from: {
                type: Sequelize.STRING
            },
            to: {
                type: Sequelize.STRING
            },
            cc: {
                type: Sequelize.STRING
            },
            bcc: {
                type: Sequelize.STRING
            },
            subject: {
                type: Sequelize.STRING
            },
            text: {
                type: Sequelize.STRING
            },
            html: {
                type: Sequelize.STRING
            },
            attachments: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('emailQueues');
    }
};