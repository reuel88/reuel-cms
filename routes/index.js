const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'Express'});
});

/* Auth router */
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
