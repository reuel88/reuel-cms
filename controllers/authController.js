const userModal = require('../models').user;
const jwt = require('jsonwebtoken');
const constants = require('../config/constants');

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
        if (!req.body.email || !req.body.password) {
            return res.status(400).send({message: 'Email and Password are missing'});
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
    login(req, res) {
        return userModal
            .find({
                where: {
                    email: req.body.email
                }
            })
            .then(user => {
                if (!user) return res.status(401).send({message: 'Authentication failed. User not found'});

                user.comparePassword(req.body.password, (err, isMatch) => {
                    if (!(isMatch && !err)) return res.status(401).send({
                        success: false,
                        message: 'Authentication failed. Wrong password.'
                    });

                    const token = jwt.sign(JSON.parse(JSON.stringify(user)), constants.SALT, {expiresIn: 86400 * 30});
                    jwt.verify(token, constants.SALT, (err, data) => console.log(err, data));
                    return res.json({success: true, token: `JWT ${token}`})

                });
            })
            .catch(error => res.status(400).send(error));
    },
    authenticateToken(req,res , next){
        const token = getToken(req.headers);
        if(!token){
            return res.status(403).send({success: false, message: 'Unauthorized.'});
        }
        next();
    }
};