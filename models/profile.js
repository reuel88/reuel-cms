'use strict';
module.exports = (sequelize, DataTypes) => {
    const profile = sequelize.define('profile', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        companyId: DataTypes.INTEGER,
        fullName: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        birthDate: DataTypes.DATE,
        sex: {
            type:DataTypes.STRING,
            validate: {
                isIn: [['male', 'female', 'other']]
            }
        }
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