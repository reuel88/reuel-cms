const express = require('express');
const router = express.Router();

const roles = require('../config/roles');
const profileController = require('../controllers/profileController');
const roleController = require('../controllers/roleController');
const userController = require('../controllers/userController');
const userSettingController = require('../controllers/userSettingController');
const authController = require('../controllers/authController');

/* profile router */
router.get('/profile', (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next), profileController.list);
router.get('/profile/:id', (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next), profileController.getById);
router.post('/profile/', (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next), profileController.add);
router.put('/profile/:id', (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next), profileController.update);
router.delete('/profile/:id', (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next), profileController.delete);

/* role router */
router.get('/role', roleController.list);
router.get('/role/:id', (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next), roleController.getById);
router.post('/role/', (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next), roleController.add);
router.put('/role/:id', (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next), roleController.update);
router.delete('/role/:id', (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next), roleController.delete);

/* user router */
router.get('/user', userController.list);
router.get('/user/:id', userController.getById);
router.post('/user/', userController.add);
router.put('/user/:id', userController.update);
router.delete('/user/:id', (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next), userController.delete);

router.get('/user/:id/user-setting', userController.userSettingList);
router.get('/user/:id/user-setting/:userSettingId', userController.userSettingGetById);
router.post('/user/:id/user-setting', userController.userSettingAdd);
router.put('/user/:id/user-setting/:userSettingId', userController.userSettingUpdate);
router.delete('/user/:id/user-setting/:userSettingId', userController.userSettingDelete);

/* user setting router */
router.get('/user-setting', (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next), userSettingController.list);
router.get('/user-setting/:id', (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next), userSettingController.getById);
router.post('/user-setting/', (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next), userSettingController.add);
router.put('/user-setting/:id', (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next), userSettingController.update);
router.delete('/user-setting/:id', (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next), userSettingController.delete);

module.exports = router;