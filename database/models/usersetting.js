'use strict';
module.exports = (sequelize, DataTypes) => {
    const userSetting = sequelize.define('userSetting', {
        userId: DataTypes.INTEGER,
        label: DataTypes.STRING,
        value: DataTypes.STRING,
        enabled: DataTypes.BOOLEAN
    }, {});
    userSetting.associate = function (models) {
        // associations can be defined here
        userSetting.belongsTo(models.user, {
            foreignKey: 'userId',
        })
    };
    return userSetting;
};