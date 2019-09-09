'use strict';
module.exports = (sequelize, DataTypes) => {
    const userSetting = sequelize.define('userSetting', {
        companyId: DataTypes.INTEGER,
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        enabled: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    }, {});

    userSetting.associate = function (models) {
        // associations can be defined here
        userSetting.belongsTo(models.user, {
            foreignKey: 'userId',
        })
    };

    return userSetting;
};