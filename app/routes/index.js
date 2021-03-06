const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const companyController = require('../controllers/companyController');
const accountingIntegrationController = require('../controllers/accountingIntegrationController');
const activityTrackerMiddleware = require('../middlewares/activityTrackerMiddleware');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'Express'});
});

/* Auth router */
router.post('/register', authController.register, activityTrackerMiddleware);
router.post('/register/company', companyController.register, activityTrackerMiddleware);
router.post('/register/company/integration', accountingIntegrationController.register, activityTrackerMiddleware);
router.post('/login', authController.login, activityTrackerMiddleware);
router.post('/logout', authController.logout, activityTrackerMiddleware);
router.post('/forgot-password', authController.forgotPassword, activityTrackerMiddleware);
router.post('/reset-password', authController.resetPassword, activityTrackerMiddleware);


module.exports = router;
