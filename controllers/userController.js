const userModal = require('../models').user;
const profileModel = require('../models').profile;
const roleModel = require('../models').role;
const userRoleModel = require('../models').userRole;
const userSettingsModel = require('../models').userSetting;
const roles = require('../config/roles');


module.exports = {
    list(req, res) {
        let limit = req.query.limit || 10;
        let offset = 0;

        return userModal
            .findAndCountAll()
            .then(response => {
                let page = req.query.page;
                let pages = Math.ceil(response.count / limit);

                if (page <= pages) offset = limit * (page - 1);

                userModal
                    .findAll({
                        include: [{
                            model: profileModel,
                            as: 'profile'
                        }, {
                            model: roleModel,
                            as: 'roles'
                        }, {
                            model: userSettingsModel,
                            as: 'userSettings'
                        }],
                        limit: limit,
                        offset: offset,
                    })
                    .then(users => res.status(200).send(
                        {
                            result: users,
                            count: response.count,
                            pages: pages
                        }
                    ))
                    .catch(error => res.status(400).send(error));

            })
            .catch(error => res.status(400).send(error));

    },
    getById(req, res) {
        return userModal
            .findByPk(req.params.id, {
                attributes: ['email', 'status', 'lastLogin'],
                include: [{
                    model: profileModel,
                    as: 'profile'
                }, {
                    model: roleModel,
                    as: 'roles',
                    attributes: ['roleName']
                }, {
                    model: userSettingsModel,
                    as: 'userSettings'
                }]
            })
            .then(user => {
                if (!user) return res.status(404).send({message: 'User Not Found'});

                return res.status(200).send(user);
            })
            .catch(error => res.status(400).send(error));
    },
    add(req, res) {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send({message: 'Email and/or Password are missing'});
        } else {
            return Promise.all([
                userModal.create({
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
                    userRoleModel
                        .create({
                            userId: response[0].id,
                            roleId: response[1].id
                        })
                        .then(() => {
                            res.status(201).send(response[0]);
                        })
                        .catch(error => res.status(400).send(error));
                })
                .catch(error => res.status(400).send(error));
        }
    },
    update(req, res) {
        return userModal
            .findByPk(req.params.id, {
                include: [{
                    model: profileModel,
                    as: 'profile'
                }, {
                    model: roleModel,
                    as: 'roles'
                }, {
                    model: userSettingsModel,
                    as: 'userSettings'
                }]
            })
            .then(user => {
                if (!user) return res.status(404).send({message: 'User Not Found'});

                return user
                    .update({
                        email: req.body.email,
                        password: req.body.password,
                    })
                    .then(() => res.status(200).send(user))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return userModal
            .findByPk(req.params.id)
            .then(user => {
                if (!user) return res.status(404).send({message: 'User Not Found'});

                return user
                    .destroy()
                    .then(() => res.status(204).send(user))
                    .catch(error => res.status(400).send(error));

            })
            .catch(error => res.status(400).send(error));
    },

    // User Settings

    userSettingList(req, res){
        res.status(200).send({
            params: req.params
        });
    },
    userSettingGetById(req, res){
        res.status(200).send({
            params: req.params
        });
    },
    userSettingAdd(req, res){
        res.status(200).send({
            params: req.params
        });
    },
    userSettingUpdate(req, res){
        res.status(200).send({
            params: req.params
        });
    },
    userSettingDelete(req, res){
        res.status(200).send({
            params: req.params
        });
    },
};