const express = require('express');
const router = express.Router();

const roles = require('../config/roles');
const profileController = require('../controllers/profileController');
const roleController = require('../controllers/roleController');
const userController = require('../controllers/userController');
const userSettingController = require('../controllers/userSettingController');
const authController = require('../controllers/authController');

const GodRole = (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next);

/* profile router */
router.get('/profile', GodRole, profileController.list);
router.get('/profile/:id', GodRole, profileController.getById);
router.post('/profile/', GodRole, profileController.add);
router.put('/profile/:id', GodRole, profileController.update);
router.delete('/profile/:id', GodRole, profileController.delete);

/* role router */
router.get('/role', roleController.list);
router.get('/role/:id', GodRole, roleController.getById);
router.post('/role/', GodRole, roleController.add);
router.put('/role/:id', GodRole, roleController.update);
router.delete('/role/:id', GodRole, roleController.delete);

/* user router */
router.get('/user', userController.list);
router.get('/user/:id', userController.getById);
router.post('/user/', userController.add);
router.put('/user/:id', userController.update);
router.delete('/user/:id', GodRole, userController.delete);

router.get('/user/:id/user-setting', userController.userSettingsList);
router.get('/user/:id/user-setting/:userSettingId', userController.userSettingsGetById);
router.post('/user/:id/user-setting', GodRole, userController.userSettingsAdd);
router.put('/user/:id/user-setting/:userSettingId', userController.userSettingsUpdate);
router.delete('/user/:id/user-setting/:userSettingId', GodRole, userController.userSettingsDelete);

/* user setting router */
router.get('/user-setting', GodRole, userSettingController.list);
router.get('/user-setting/:id', GodRole, userSettingController.getById);
router.post('/user-setting/', GodRole, userSettingController.add);
router.put('/user-setting/:id', GodRole, userSettingController.update);
router.delete('/user-setting/:id', GodRole, userSettingController.delete);

module.exports = router;