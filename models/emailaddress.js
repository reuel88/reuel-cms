'use strict';
module.exports = (sequelize, DataTypes) => {
    const emailAddress = sequelize.define('emailAddress', {
        fullName: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        flag: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {});
    emailAddress.associate = function (models) {

    };
    return emailAddress;
};