'use strict';
module.exports = (sequelize, DataTypes) => {
    const profile = sequelize.define('profile', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fullName: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        birthDate: DataTypes.DATE,
        sex: DataTypes.STRING
    }, {});

    profile.associate = function (models) {
        profile.hasMany(models.address, {
            foreignKey: 'profileId',
            as: 'addresses',
        });

        profile.hasMany(models.emailAddress, {
            foreignKey: 'profileId',
            as: 'emailAddresses',
        });

        profile.hasMany(models.phoneNumber, {
            foreignKey: 'profileId',
            as: 'phoneNumbers',
        });
    };

    return profile;
};