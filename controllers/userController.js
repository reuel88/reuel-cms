const userModal = require('../database/models').user;
const profileModel = require('../database/models').profile;
const roleModel = require('../database/models').role;
const userSettingsModel = require('../database/models').userSetting;

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
        return userModal
            .create({
                email: req.body.email,
                password: req.body.password
            })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error));
    },
    update(req, res){
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
            .then( user => {
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
    delete(req, res){
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