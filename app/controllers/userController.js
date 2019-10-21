const Sequelize = require('sequelize');
const _map = require('lodash').map;
const qs = require('qs');
const niv = require('node-input-validator');
const nodeInputValidatorHelper = require("../helpers/nodeInputValidatorHelper");
const roles = require('../../config/roles');
const userModel = require('../../models').user;
const profileModel = require('../../models').profile;
const roleModel = require('../../models').role;
const userRoleModel = require('../../models').userRole;
const userSettingModel = require('../../models').userSetting;
const companyModel = require('../../models').company;

const Op = Sequelize.Op;

const upCreateHelper = (model, association, values) => {

    if (!association) {
        return model.create(values);
    }

    return association.update(values);
};

module.exports = {
    list(req, res) {
        let page = req.query.page || 1;
        let limit = req.query.limit || 10;
        let offset = limit * (page - 1);

        return userModel.findByPk(req.user.id, {
            attributes: ['id'],
            include: [
                {
                    model: companyModel,
                    as: 'companies',
                    attributes: ['id'],
                }
            ]
        }).then(user => {
            const companyIds = _map(user.companies, company => company.id);

            userModel
                .findAndCountAll({
                    attributes: ['id', 'email', 'status', 'lastLogin'],
                    include: [{
                        model: roleModel,
                        as: 'roles',
                        attributes: ['roleName'],
                    }, {
                        model: companyModel,
                        as: 'companies',
                        where: {
                            'id': {[Op.in]: companyIds}
                        },
                        attributes: ['id', 'businessNumber', 'fullName', 'isCompany'],
                    }],
                    limit: limit,
                    offset: offset,
                })
                .then(response => {
                    res.status(200).send(response);
                })
                .catch(error => res.status(400).send(error));

        });


    },
    getById(req, res) {
        return userModel.findByPk(req.user.id, {
            attributes: ['id'],
            include: [
                {
                    model: companyModel,
                    as: 'companies',
                    attributes: ['id'],
                }
            ]
        }).then(user => {
            const companyIds = _map(user.companies, company => company.id);

            userModel
                .findByPk(req.params.id, {
                    attributes: ['id', 'email', 'status', 'lastLogin'],
                    include: [
                        {
                            model: profileModel,
                            as: 'profile',
                            attributes: ['id', 'firstName', 'lastName', 'birthDate', 'sex']
                        },
                        {
                            model: roleModel,
                            as: 'roles',
                            attributes: ['roleName']
                        }, {
                            model: userSettingModel,
                            as: 'userSettings'
                        }, {
                            model: companyModel,
                            as: 'companies',
                            where: {
                                'id': {[Op.in]: companyIds}
                            },
                            attributes: ['id', 'businessNumber', 'fullName', 'isCompany'],
                        }
                    ]
                })
                .then(user => {
                    if (!user) return res.status(404).send({
                        name: 'Not found',
                        errors: [{
                            message: 'User Not Found'
                        }]
                    });

                    return res.status(200).send(user);
                })
                .catch(error => res.status(400).send(error));

        });

    },
    add(req, res) {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send({
                name: 'Error',
                errors: [{
                    message: 'Email and/or Password are missing'
                }]
            });
        } else {
            return Promise.all([
                userModel.create({
                    email: req.body.email,
                    password: req.body.password,
                }),
                roleModel.findOne({
                    where: {
                        roleName: roles.USER,
                    }
                })
            ])
                .then(response => {
                    /**
                     * May want to generate the user settings here.
                     */

                    userRoleModel
                        .create({
                            userId: response[0].id,
                            roleId: response[1].id
                        })
                        .then(() => {
                            // TODO: should probably not send the user back??
                            res.status(201).send(response[0]);
                        })
                        .catch(error => res.status(400).send(error));
                })
                .catch(error => res.status(400).send(error));
        }
    },
    async update(req, res) {
        const data = qs.parse(req.body);

        niv.extend('isIn', ({value, args}) => {
            return args.includes(value);
        });

        niv.extendMessages({
            isIn: 'Not a recognized sex'
        });

        const validator = new niv.Validator({
            email: data.email,
            sex: data.profile.sex,
            birthDate: data.profile.birthDate,
        }, {
            email: 'required|email',
            birthDate: 'dateiso',
            sex: 'isIn:male,female,other',
        });

        const isValid = await validator.check();

        if (!isValid) return res.status(400).send(nodeInputValidatorHelper.formatErrors(validator)) && next();

        return userModel
            .findByPk(req.params.id, {
                include: [{
                    model: profileModel,
                    as: 'profile'
                }, {
                    model: roleModel,
                    as: 'roles'
                }, {
                    model: companyModel,
                    as: 'companies'
                }]
            })
            .then(user => {
                if (!user) return res.status(404).send({
                    name: 'Not found',
                    errors: [{
                        message: 'User Not Found'
                    }]
                });

                const calls = [
                    user.update({
                        email: data.email,
                        password: data.password,
                    }).catch(error => res.status(400).send(error)),
                    upCreateHelper(profileModel, user.profile, {
                        userId: user.id,
                        firstName: data.profile.firstName,
                        lastName: data.profile.lastName,
                        sex: data.profile.sex,
                        birthDate: data.profile.birthDate,
                    }).catch(error => res.status(400).send(error))
                ];

                return Promise.all(calls).then(() => {
                    res.status(200).send(user);
                }).catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return userModel
            .findByPk(req.params.id)
            .then(user => {
                if (!user) return res.status(404).send({
                    name: 'Not found',
                    errors: [{
                        message: 'User Not Found'
                    }]
                });

                return user
                    .destroy()
                    .then(() => res.status(204).send(user))
                    .catch(error => res.status(400).send(error));

            })
            .catch(error => res.status(400).send(error));
    },
    currentUserId(req, res) {
        const user = req.user;

        if (!user) return res.status(404).send({
            name: 'Not found',
            errors: [{
                message: 'User Not Found'
            }]
        });

        res.status(200).send({id: user.id});
    },

    // User Settings ---------------------------------------------------------------------------------------------------
    userSettingList(req, res) {
        return userSettingModel
            .findAll({
                where: {
                    userId: req.params.id
                }
            })
            .then(userSettings => res.status(200).send(userSettings))
            .catch(error => res.status(400).send(error));
    },
    userSettingGetById(req, res) {
        return userSettingModel
            .findAll({
                where: {
                    id: req.params.userSettingId,
                    userId: req.params.id,
                },
                include: [{
                    model: userModel,
                    as: 'user'
                }]
            })
            .then(userSetting => res.status(200).send(userSetting))
            .catch(error => res.status(400).send(error));

    },
    userSettingAdd(req, res) {
        return userSettingModel
            .create({
                userId: req.params.id,
                label: req.body.label,
                value: req.body.value,
                enabled: req.body.enabled,
            })
            .then(userSetting => res.status(200).send(userSetting))
            .catch(error => res.status(400).send(error));
    },
    userSettingUpdate(req, res) {
        return userSettingModel
            .findByPk(req.params.userSettingId, {
                include: [{
                    model: userModel,
                    as: 'user'
                }]
            })
            .then(userSetting => {
                if (!userSetting) return res.status(404).send({
                    name: 'Not found',
                    errors: [{
                        message: 'User Setting Not Found'
                    }]
                });

                return userSetting
                    .update({
                        userId: req.body.userId,
                        label: req.body.label,
                        value: req.body.value,
                        enabled: req.body.enabled,
                    })
                    .then(() => res.status(200).send(userSetting))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    userSettingDelete(req, res) {
        return userSettingModel
            .findByPk(req.params.userSettingId)
            .then(userSetting => {
                if (!userSetting) return res.status(404).send({
                    name: 'Not found',
                    errors: [{
                        message: 'User Setting Not Found'
                    }]
                });

                return userSetting
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    // Profile ---------------------------------------------------------------------------------------------------------
    profileList(req, res) {
        return profileModel
            .findAll({
                where: {
                    userId: req.params.id
                }
            })
            .then(profiles => res.status(200).send(profiles))
            .catch(error => res.status(400).send(error));
    },
    profileGetById(req, res) {
        return profileModel
            .findAll({
                where: {
                    id: req.params.profileId,
                    userId: req.params.id
                },
                include: [{
                    model: userModel,
                    as: 'user'
                }]
            })
            .then(profile => res.status(200).send(profile))
            .catch(error => res.status(400).send(error));
    },
    profileAdd(req, res) {
        return profileModel
            .create({
                userId: req.params.id,
                fullName: req.body.fullName,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                birthDate: req.body.birthDate,
                sex: req.body.sex,
            })
            .then(profile => res.status(200).send(profile))
            .catch(error => res.status(400).send(error));
    },
    profileUpdate(req, res) {
        return profileModel
            .findByPk(req.params.profileId, {
                include: [{
                    model: userModel,
                    as: 'user'
                }]
            })
            .then(profile => {
                if (!profile) return res.status(404).send({
                    name: 'Not found',
                    errors: [{
                        message: 'Profile Not Found'
                    }]
                });

                return profile
                    .update({
                        userId: req.params.id,
                        fullName: req.body.fullName,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        birthDate: req.body.birthDate,
                        sex: req.body.sex,
                    })
                    .then(() => res.status(200).send(profile))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    profileDelete(req, res) {
        return profileModel
            .findByPk(req.params.profileId)
            .then(profile => {
                if (!profile) return res.status(404).send({
                    name: 'Not found',
                    errors: [{
                        message: 'Profile Not Found'
                    }]
                });

                return profile
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};