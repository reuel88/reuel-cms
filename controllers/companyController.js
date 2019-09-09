const jwt = require('jsonwebtoken');
const constants = require('../config/constants');

module.exports = {
    register(req, res) {
        const token = req.query.t;
        const decode = jwt.verify(token, constants.SALT);

        res.send(decode);
    },
    list(req, res) {},
    getById(req, res) {},
    add(req, res) {},
    update(req, res) {},
    delete(req, res) {},
};