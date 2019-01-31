const userModal = require('../database/models').user;

module.exports = {
    list(req, res) {
        return userModal.findAll();
    }
};