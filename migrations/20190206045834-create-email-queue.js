'use strict';

const constants = require('../app/config/constants');

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
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: constants.OPEN
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
    down: (queryInterface) => {
        return queryInterface.dropTable('emailQueues');
    }
};