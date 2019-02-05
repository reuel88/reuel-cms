'use strict';
module.exports = (sequelize, DataTypes) => {
    const role = sequelize.define('role', {
        roleName: DataTypes.STRING
    }, {});
    role.associate = function (models) {
        role.belongsToMany(models.user, {
            through: 'userRole',
            as: 'users',
            foreignKey: 'roleId'
        })
    };
    return role;
};