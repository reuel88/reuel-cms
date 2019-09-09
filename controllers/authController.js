const jwt = require('jsonwebtoken');
const userModal = require('../models').user;
const roleModel = require('../models').role;
const constants = require('../config/constants');
const userController = require('./userController');
const passport = require('../config/passport');

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
    register(req, res) {
        /**
         * Need to change up the registration for this if I include organisation based structure
         *
         * 1. Ask for email and password
         *      - generate email to confirm email
         *      - add to marketing workflow
         * 2. Ask for company name
         *      - generate organisation settings & details
         * 3. Ask for integration details
         */

        return userController.add(req, res);
    },
    login(req, res) {
        return userModal
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
                    }
                ]
            })
            .then(user => {
                if (!user) return res.status(401).send({
                    name: 'Unauthorized',
                    errors: [{
                        message: 'Authentication failed.'
                    }]
                });

                user.comparePassword(req.body.password, (err, isMatch) => {
                    if (!(isMatch && !err)) return res.status(401).send({
                        name: 'Unauthorized',
                        errors: [{
                            message: 'Authentication failed.'
                        }]
                    });

                    user
                        .update({
                            lastLogin: new Date()
                        })
                        .then(() => {
                            const token = jwt.sign(JSON.parse(JSON.stringify(user)), constants.SALT, {expiresIn: 86400 * 30}); // 30 days
                            jwt.verify(token, constants.SALT, (err, data) => console.log(err, data));
                            return res.json({token: `JWT ${token}`})
                        })
                        .catch(error => res.status(400).send(error));
                });
            })
            .catch(error => res.status(400).send(error));
    },
    authenticateToken(req, res, next){
        return passport.authenticate("jwt", {
            session: false
        }, (err, user, info) => {
            if (err) {
                console.log(err, info);
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
        const decode = jwt.verify(token, constants.SALT);

        if (!allowedRoles.includes(decode.roles[0].roleName)) return res.status(403).send({
            name: 'Unauthorized',
            errors: [{
                message: 'user unauthorized'
            }]
        });

        next();
    }
};