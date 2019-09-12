const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const companyController = require('../controllers/companyController');
const activityTrackerMiddleware = require('../middlewares/activityTrackerMiddleware');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'Express'});
});

/* Auth router */
router.post('/register', authController.register, activityTrackerMiddleware);
router.post('/login', authController.login);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);
router.post('/register/company', companyController.register, (req, res) => {
    console.log(res.statusCode);
});

module.exports = router;
