'use strict';
module.exports = (sequelize, DataTypes) => {
    const emailAddress = sequelize.define('emailAddress', {
        companyId: DataTypes.INTEGER,
        profileId: DataTypes.INTEGER,
        customerContactId: DataTypes.INTEGER,
        label: DataTypes.STRING, // (home, work, etc)
        email: DataTypes.STRING,
    }, {});
    emailAddress.associate = function (models) {

    };
    return emailAddress;
};