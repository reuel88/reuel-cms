'use strict';

const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: DataTypes.STRING,
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'active'
        },
        lastLogin: DataTypes.DATE,
    }, {});

    user.beforeSave((usr) => {
        if (usr.changed('password')) usr.password = bcrypt.hashSync(usr.password, bcrypt.genSaltSync(10), null);
    });

    user.prototype.comparePassword = function (pass, fn) {
        bcrypt.compare(pass, this.password, function (err, isMatch) {
            if (err) return fn(err);

            fn(null, isMatch);
        });
    };

    user.associate = function (models) {
        user.hasOne(models.profile, {
            foreignKey: 'userId',
            as: 'profile',
        });

        user.hasMany(models.userSetting, {
            foreignKey: 'userId',
            as: 'userSettings'
        });

        user.belongsToMany(models.role, {
            through: 'userRole',
            as: 'roles',
            foreignKey: 'userId'
        })
    };
    return user;
};