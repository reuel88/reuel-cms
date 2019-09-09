const jwt = require('jsonwebtoken');
const constants = require('../config/constants');
const companyModel = require('../models').company;
const userModel = require('../models').user;

module.exports = {
    register(req, res, next) {
        const token = req.query.t;
        const decode = jwt.verify(token, constants.SALT, (err) => {
            res.status(403).send({
                name: err.name,
                errors: [{
                    message: err.message,
                    expiredAt: err.expiredAt
                }],
            });

            next();
        });

        console.log('hello');
        if (!decode) return;
        console.log('world');

        return Promise
            .all([
                userModel.findByPk(decode.userId),
                companyModel.create({
                    fullName: req.body.fullName,
                    businessNumber: req.body.businessNumber,
                    isCompany: req.body.isCompany
                })
            ])
            .then(response => {
                const user = response[0];
                const company = response[1];

                if (!user) return res.status(404).send({
                    name: 'Not found',
                    errors: [{
                        message: 'User Not Found'
                    }]
                });

                user
                    .update({
                        companyId: company.id
                    })
                    .then(() => {
                        const token = jwt.sign(JSON.parse(JSON.stringify({
                            userId: user.id,
                            companyId: company.id
                        })), constants.SALT, {expiresIn: 86400 * 30}); // 30 days

                        res.status(201).send({
                            redirect: `/register/company/integration?t=${token}`
                        });
                    });
            })
            .catch(error => {
                //TODO: Handle this better
                res.status(400).send(error)
            });
    },
    list(req, res) {
        let limit = req.query.limit || 10;
        let offset = 0;

        return companyModel
            .findAndCountAll()
            .then(response => {
                let page = req.query.page;
                let pages = Math.ceil(response.count / limit);

                if (page <= pages) offset = limit * (page - 1);

                companyModel
                    .findAll()
                    .then(companies => res.status(200).send(
                        {
                            result: companies,
                            count: response.count,
                            pages: pages
                        }
                    ))
                    .catch(error => res.status(400).send(error));

            })
            .catch(error => res.status(400).send(error));
    },
    getById(req, res) {
        return companyModel
            .findByPk(req.params.id)
            .then(company => res.status(200).send(company))
            .catch(error => res.status(400).send(error));
    },
    add(req, res) {
        return companyModel
            .create({
                fullName: req.body.fullName,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                businessNumber: req.body.businessNumber,
                isCompany: req.body.isCompany,
            })
            .then(company => res.status(200).send(company))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return companyModel
            .findByPk(req.params.id)
            .then(company => {
                if (!company) return res.status(404).send({
                    name: 'Not found',
                    errors: [{
                        message: 'Company Not Found'
                    }]
                });

                return company
                    .update({
                        fullName: req.body.fullName,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        businessNumber: req.body.businessNumber,
                        isCompany: req.body.isCompany,
                    })
                    .then(() => res.status(200).send(company))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return companyModel
            .findByPk(req.params.id)
            .then(company => {
                if (!company) return res.status(404).send({
                    name: 'Not found',
                    errors: [{
                        message: 'Company Not Found'
                    }]
                });

                return company
                    .destroy()
                    .then(() => res.status(204).send(company))
                    .catch(error => res.status(400).send(error));

            })
            .catch(error => res.status(400).send(error));
    },
};