const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const companyController = require('../controllers/companyController');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'Express'});
});

/* Auth router */
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/register/company', companyController.register, (req,res) => {
    console.log(res.statusCode);
});

module.exports = router;
