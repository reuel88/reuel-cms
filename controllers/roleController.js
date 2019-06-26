const RoleModel = require('../models').role;
const UserModel = require('../models').user;

module.exports = {
    // Get
    list(req, res) {
        return RoleModel
            .findAll({
                include: [{
                    model: UserModel,
                    as: 'users'
                }]
            })
            .then(roles => res.status(200).send(roles))
            .catch(error => res.status(400).send(error));
    },
    // Get
    getById(req, res) {
        return RoleModel
            .findByPk(req.params.id, {
                include: [{
                    model: UserModel,
                    as: 'users'
                }]
            })
            .then(role => {
                if (!role) return res.status(404).send({message: 'Role Not Found'});

                return res.status(200).send(role);
            })
            .catch(error => res.status(400).send(error));

    },
    // Post
    add(req, res){
        return RoleModel
            .create({roleName: req.body.roleName})
            .then(role => res.status(201).send(role))
            .catch(error => res.status(400).send(error));
    },
    // Update
    update(req, res){
        return RoleModel
            .findByPk(req.params.id, {
                include: [{
                    model: UserModel,
                    as: 'users'
                }]
            })
            .then(role => {
                if (!role) return res.status(404).send({message: 'Role Not Found'});

                return role
                    .update({
                        roleName: req.body.roleName
                    })
                    .then(() => res.status(200).send(role))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    // Delete
    delete(req, res){
        return RoleModel
            .findByPk(req.params.id)
            .then(role => {
                if (!role) return res.status(404).send({message: 'Role Not Found'});

                return role
                    .destroy()
                    .then(() => res.status(204).send(role))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }

};