const userModal = require('../models').user;
const profileModel = require('../models').profile;
const roleModel = require('../models').role;
const userSettingsModel = require('../models').userSetting;

module.exports = {
    list(req, res) {
        return userModal
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
                }]
            })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error));
    },
    getById(req, res) {
        return userModal
            .findById(req.params.id, {
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

                return res.status(200).send(user);
            })
            .catch(error => res.status(400).send(error));
    },
    add(req, res) {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send({message: 'Email and/or Password are missing'});
        } else {
            return userModal
                .create({
                    email: req.body.email,
                    password: req.body.password
                })
                .then(user => res.status(201).send(user))
                .catch(error => res.status(400).send(error));
        }
    },
    update(req, res) {
        console.log(req.body);

        return userModal
            .findById(req.params.id, {
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
                        password: req.body.password
                    })
                    .then(() => res.status(200).send(user))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return userModal
            .findById(req.params.id)
            .then(user => {
                if (!user) return res.status(404).send({message: 'User Not Found'});

                return user
                    .destroy()
                    .then(() => res.status(204).send(user))
                    .catch(error => res.status(400).send(error));

            })
            .catch(error => res.status(400).send(error));
    }
};