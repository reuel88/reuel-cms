'use strict';
module.exports = (sequelize, DataTypes) => {
    const profile = sequelize.define('profile', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fullName: DataTypes.STRING,
        birthDate: DataTypes.DATE,
        gender: DataTypes.STRING
    }, {});

    profile.associate = function (models) {
        // associations can be defined here
    };

    return profile;
};