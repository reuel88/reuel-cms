const express = require('express');
const router = express.Router();
const passport = require('../config/passport');

const authController = require('../controllers/authController');
const profileController = require('../controllers/profileController');
const roleController = require('../controllers/roleController');
const userController = require('../controllers/userController');
const userSettingController = require('../controllers/userSettingController');


/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'Express'});
});

/* Auth router */
router.post('/register', authController.register);
router.post('/login', authController.login);

/* profile router */
router.get('/api/v1/profile', profileController.list);
router.get('/api/v1/profile/:id', profileController.getById);
router.post('/api/v1/profile/', profileController.add);
router.put('/api/v1/profile/:id', profileController.update);
router.delete('/api/v1/profile/:id', profileController.delete);

/* role router */
router.get('/api/v1/role', roleController.list);
router.get('/api/v1/role/:id', roleController.getById);
router.post('/api/v1/role/', roleController.add);
router.put('/api/v1/role/:id', roleController.update);
router.delete('/api/v1/role/:id', roleController.delete);

/* user router */
router.get('/api/v1/user', passport.authenticate('jwt', {session: false}), authController.authenticateToken, userController.list);
router.get('/api/v1/user/:id', userController.getById);
router.post('/api/v1/user/', userController.add);
router.put('/api/v1/user/:id', userController.update);
router.delete('/api/v1/user/:id', userController.delete);

/* user setting router */
router.get('/api/v1/user-setting', userSettingController.list);
router.get('/api/v1/user-setting/:id', userSettingController.getById);
router.post('/api/v1/user-setting/', userSettingController.add);
router.put('/api/v1/user-setting/:id', userSettingController.update);
router.delete('/api/v1/user-setting/:id', userSettingController.delete);



module.exports = router;
