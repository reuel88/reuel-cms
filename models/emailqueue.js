'use strict';

const constants = require('../config/constants');

module.exports = (sequelize, DataTypes) => {
    const emailQueue = sequelize.define('emailQueue', {
        from: {
            type: DataTypes.STRING,
        },
        to: {
            type: DataTypes.STRING,
        },
        cc: {
            type: DataTypes.STRING,
        },
        bcc: {
            type: DataTypes.STRING,
        },
        subject: DataTypes.STRING,
        text: DataTypes.STRING,
        html: DataTypes.STRING,
        attachments: DataTypes.STRING,
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: constants.OPEN
        },
    }, {});
    emailQueue.associate = function (models) {
    };
    return emailQueue;
};