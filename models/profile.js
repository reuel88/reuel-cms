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
        profile.hasMany(models.profileAddress, {
            foreignKey: 'profileId',
            as: 'profileAddresses',
        });

        profile.hasMany(models.profileEmailAddress, {
            foreignKey: 'profileId',
            as: 'profileEmailAddresses',
        });

        profile.hasMany(models.profilePhoneNumber, {
            foreignKey: 'profileId',
            as: 'profilePhoneNumbers',
        });
    };

    return profile;
};