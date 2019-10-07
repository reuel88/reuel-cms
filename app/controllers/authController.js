const jwt = require('jsonwebtoken');
const {Validator} = require('node-input-validator');
const passport = require('../../config/passport');
const constants = require('../../config/constants');
const nodeInputValidatorHelper = require("../helpers/nodeInputValidatorHelper");
const jsonWebTokenHelper = require("../helpers/jsonWebTokenHelper");
const roles = require('../../config/roles');
const roleModel = require('../../models').role;
const userModel = require('../../models').user;
const userRoleModel = require('../../models').userRole;
const companyModel = require('../../models').company;

function getToken(headers) {
    if (headers && headers.authorization) {
        const parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
}

module.exports = {
    async register(req, res, next) {
        /**
         * 1. Ask for email and password
         *      - generate email to confirm email
         *      - add to marketing workflow
         * 2. Ask for company name
         *      - generate organisation settings & details
         * 3. Ask for integration details
         */

        const validator = new Validator(req.body, {
            email: 'required|email',
            password: 'required'
        });

        const isValid = await validator.check();

        if (!isValid) return res.status(400).send(nodeInputValidatorHelper.formatErrors(validator)) && next();

        Promise.all([
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
                 * May want to generate the user settings here. And add to a marketing workflow
                 */

                userRoleModel
                    .create({
                        userId: response[0].id,
                        roleId: response[1].id
                    })
                    .then(() => {
                        const token = jwt.sign(JSON.parse(JSON.stringify({userId: response[0].id})), constants.SALT, {expiresIn: 86400 * 30}); // 30 days

                        setTimeout(() => {
                            res.status(201).send({redirect: `/register/company?t=${token}`});
                            next();
                        }, 2000);
                    })
                    .catch(error => res.status(400).send(error) && next());
            })
            .catch(error => res.status(400).send(error) && next());

    },
    async login(req, res, next) {
        const validator = new Validator(req.body, {
            email: 'required|email',
            password: 'required'
        });

        const isValid = await validator.check();

        if (!isValid) return res.status(400).send(nodeInputValidatorHelper.formatErrors(validator)) && next();

        userModel
            .findOne({
                where: {
                    email: req.body.email,
                    status: 'active'
                },
                include: [
                    {
                        model: roleModel,
                        as: 'roles',
                        attributes: ['roleName']
                    },
                    {
                        model: companyModel,
                        as: 'companies'
                    }
                ]
            })
            .then(user => {
                if (!user) return res.status(401).send({
                    name: 'Unauthorized',
                    errors: [{
                        message: 'Authentication failed'
                    }]
                }) && next();

                user.comparePassword(req.body.password, (err, isMatch) => {
                    if (!(isMatch && !err)) return res.status(401).send({
                        name: 'Unauthorized',
                        errors: [{
                            message: 'Authentication failed'
                        }]
                    }) && next();

                    user
                        .update({
                            lastLogin: new Date()
                        })
                        .then(() => {
                            const token = jwt.sign(JSON.parse(JSON.stringify(user)), constants.SALT, {expiresIn: 86400 * 30}); // 30 days

                            req.user = user;
                            return res.status(200).send({
                                token: `JWT ${token}`,
                                id: user.id,
                                redirect: '/dashboard'
                            }) && next();
                        })
                        .catch(error => res.status(400).send(error) && next());
                });
            })
            .catch(error => res.status(400).send(error) && next());
    },
    logout(req, res, next) {
        return res.status(200).send({
            redirect: '/login'
        }) && next();
    },
    async forgotPassword(req, res, next) {
        const validator = new Validator(req.body, {
            email: 'required|email'
        });

        const isValid = await validator.check();

        if (!isValid) return res.status(400).send(nodeInputValidatorHelper.formatErrors(validator)) && next();

        return userModel
            .findOne({
                where: {
                    email: req.body.email,
                }
            })
            .then(user => {

                // TODO: il8n

                if (!user) return res.status(200).send({
                    name: 'Password Reset',
                    messages: [{
                        title: 'Password Reset',
                        message: `Email send to ${req.body.email}`
                    }],
                    redirect: '/'
                }) && next();


                const token = jwt.sign(JSON.parse(JSON.stringify({userId: user.id})), constants.SALT, {expiresIn: 86400 * 30}); // 30 days

                user
                    .update({
                        forgotPasswordToken: token
                    })
                    .then(() => {
                        res.status(200).send({
                            name: 'Password Reset',
                            messages: [{
                                title: 'Password Reset',
                                message: `Email send to ${req.body.email}`
                            }],
                            redirect: '/'
                        }) && next();
                    })
                    .catch(error => res.status(400).send(error) && next());
            })
            .catch(error => res.status(400).send(error) && next());
    },
    async resetPassword(req, res, next) {
        const validator = new Validator(req.body, {
            password: 'required|same:confirmPassword',
        });

        const isValid = await validator.check();

        if (!isValid) return res.status(400).send(nodeInputValidatorHelper.formatErrors(validator)) && next();

        const token = req.query.t;
        return jwt.verify(token, constants.SALT, (err, decode) => {
            if (err) return res.status(403).send(jsonWebTokenHelper.formatErrors(err)) && next();

            return userModel
                .findOne({
                    where: {
                        id: decode.userId,
                        forgotPasswordToken: token
                    }
                })
                .then(user => {
                    if (!user) return res.status(404).send({
                        name: 'Not found',
                        errors: [{
                            message: 'User Not Found'
                        }]
                    }) && next();

                    user
                        .update({
                            forgotPasswordToken: null,
                            password: req.body.password,
                        })
                        .then(() => res.status(200).send(user) && next())
                        .catch(error => res.status(400).send(error) && next());
                })
                .catch(error => res.status(400).send(error) && next());
        });

    },
    authenticateToken(req, res, next) {
        return passport.authenticate("jwt", {
            session: false
        }, (err, user, info) => {
            if (err) {
                console.error(err, info);
                return next(err);
            }

            if (!user) {
                return res.status(403).send({
                    name: 'Unauthorized',
                    errors: [{
                        message: 'user unauthorized'
                    }]
                });
            }
            // Forward user information to the next middleware
            req.user = user;
            next();
        })(req, res, next);
    },
    authenticateRole(allowedRoles, req, res, next) {
        const token = getToken(req.headers);
        jwt.verify(token, constants.SALT, (err, decode) => {
            if (err)
                return res.status(403).send(jsonWebTokenHelper.formatErrors(err));

            if (!allowedRoles.includes(decode.roles[0].roleName))
                return res.status(403).send({
                    name: 'Unauthorized',
                    errors: [{
                        message: 'User unauthorized'
                    }]
                });

            next();
        });
    }
};