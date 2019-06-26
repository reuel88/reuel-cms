const userModal = require('../models').user;
const profileModel = require('../models').profile;

module.exports = {
    list(req, res) {
        return profileModel
            .findAll({
                include: [{
                    model: userModal,
                    as: 'user'
                }]
            })
            .then(profiles => res.status(200).send(profiles))
            .catch(error => res.status(400).send(error));

    },
    getById(req, res) {
        return profileModel
            .findByPk(req.params.id, {
                include: [{
                    model: userModal,
                    as: 'user'
                }]
            })
            .then(profile => {
                if (!profile) return res.status(404).send({message: 'Profile Not Found'});

                res.status(200).send(profile);
            })
            .catch(error => res.status(400).send(error));
    },
    add(req, res) {
        return profileModel
            .create({
                userId: req.body.userId,
                fullName: req.body.fullName,
                birthDate: req.body.birthDate,
                gender: req.body.gender
            })
            .then(profile => res.status(201).send(profile))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return profileModel
            .findByPk(req.params.id, {
                include: [{
                    model: userModal,
                    as: 'user'
                }]
            })
            .then(profile => {
                if (!profile) return res.status(404).send({message: 'Profile Not Found'});

                return profile
                    .update({
                        userId: req.body.userId,
                        fullName: req.body.fullName,
                        birthDate: req.body.birthDate,
                        gender: req.body.gender
                    })
                    .then(profile => res.status(200).send(profile))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return profileModel
            .findByPk(req.params.id)
            .then(profile => {
                if (!profile) return res.status(404).send({message: 'Profile Not Found'});

                return profile
                    .destroy()
                    .then(() => res.status(204).send(profile))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};