const userSettingModel = require('../../models').userSetting;
const userModel = require('../../models').user;

module.exports = {
    list(req, res) {
        let limit = req.query.limit || 10;
        let offset = 0;

        return userSettingModel
            .findAndCountAll()
            .then(response => {
                let page = req.query.page;
                let pages = Math.ceil(response.count / limit);

                if (page <= pages) offset = limit * (page - 1);

                userSettingModel
                    .findAll({
                        include: [{
                            model: userModel,
                            as: 'user'
                        }]
                    })
                    .then(userSettings => res.status(200).send(
                        {
                            result: userSettings,
                            count: response.count,
                            pages: pages
                        }
                    ))
                    .catch(error => res.status(400).send(error));

            })
            .catch(error => res.status(400).send(error));

    },
    getById(req, res) {
        return userSettingModel
            .findByPk(req.params.id, {
                include: [{
                    model: userModel,
                    as: 'user'
                }]
            })
            .then(userSetting => res.status(200).send(userSetting))
            .catch(error => res.status(400).send(error));
    },
    add(req, res) {
        return userSettingModel
            .create({
                userId: req.body.userId,
                label: req.body.label,
                value: req.body.value,
                enabled: req.body.enabled,
            })
            .then(userSetting => res.status(200).send(userSetting))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return userSettingModel
            .findByPk(req.params.id, {
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
    delete(req, res) {
        return userSettingModel
            .findByPk(req.params.id)
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
};