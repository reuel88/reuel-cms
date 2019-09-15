const jwt = require('jsonwebtoken');
const constants = require('../config/constants');
const jsonWebTokenHelper = require("../helpers/jsonWebTokenHelper");
const accountingIntegrationModel = require('../models').accountingIntegration;
const accountingTypeModel = require('../models').accountingType;


module.exports = {
    register(req, res) {
        const token = req.query.t;
        return jwt.verify(token, constants.SALT, (err, decode) => {

            if (err) return res.status(403).send(jsonWebTokenHelper.formatErrors(err));

            return Promise
                .all([
                    accountingTypeModel.findOne({
                        where: {
                            name: req.body.accountingType
                        }
                    }),
                ])
                .then(response => {
                    const accountingType = response[0];

                    if(!accountingType) res.status(404).send({
                        name: 'Not found',
                        errors: [{
                            message: 'Accounting Type Not Found'
                        }]
                    });

                    return accountingIntegrationModel
                        .create({
                            companyId: decode.companyId,
                            accountingTypeId: accountingType.id,
                        })
                        .then(response => {
                            res.status(201).send({
                                redirect: `/login`
                            });
                        })
                        .catch(error => res.status(400).send(error));
                })
                .catch(error => res.status(400).send(error));
        });
    },
    list(req, res) {
        let limit = req.query.limit || 10;
        let offset = 0;

        return accountingIntegrationModel
            .findAndCountAll()
            .then(response => {
                let page = req.query.page;
                let pages = Math.ceil(response.count / limit);

                if (page <= pages) offset = limit * (page - 1);

                accountingIntegrationModel
                    .findAll()
                    .then(accountingIntegration => res.status(200).send(
                        {
                            result: accountingIntegration,
                            count: response.count,
                            pages: pages
                        }
                    ))
                    .catch(error => res.status(400).send(error));

            })
            .catch(error => res.status(400).send(error));
    },
    getById(req, res) {
        return accountingIntegrationModel
            .findByPk(req.params.id)
            .then(accountingIntegration => res.status(200).send(accountingIntegration))
            .catch(error => res.status(400).send(error));
    },
    add(req, res) {
        return accountingIntegrationModel
            .create({
                companyId: req.body.companyId,
                accountingTypeId: req.body.accountingTypeId,
            })
            .then(accountingIntegration => res.status(200).send(accountingIntegration))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return accountingIntegrationModel
            .findByPk(req.params.id)
            .then(accountingIntegration => {
                if (!accountingIntegration) return res.status(404).send({
                    name: 'Not found',
                    errors: [{
                        message: 'Accounting Integration Not Found'
                    }]
                });

                return accountingIntegration
                    .update({
                        companyId: req.body.companyId,
                        accountingTypeId: req.body.accountingTypeId,
                    })
                    .then(() => res.status(200).send(accountingIntegration))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return accountingIntegrationModel
            .findByPk(req.params.id)
            .then(accountingIntegration => {
                if (!accountingIntegration) return res.status(404).send({
                    name: 'Not found',
                    errors: [{
                        message: 'Accounting Integration Not Found'
                    }]
                });

                return accountingIntegration
                    .destroy()
                    .then(() => res.status(204).send(accountingIntegration))
                    .catch(error => res.status(400).send(error));

            })
            .catch(error => res.status(400).send(error));
    },
};