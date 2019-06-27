const express = require('express');
const router = express.Router();

const roles = require('../config/roles');
const profileController = require('../controllers/profileController');
const roleController = require('../controllers/roleController');
const userController = require('../controllers/userController');
const userSettingController = require('../controllers/userSettingController');
const authController = require('../controllers/authController');

/* profile router */
router.get('/profile', profileController.list);
router.get('/profile/:id', profileController.getById);
router.post('/profile/', profileController.add);
router.put('/profile/:id', profileController.update);
router.delete('/profile/:id', (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next), profileController.delete);

/* role router */
router.get('/role', (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next), roleController.list);
router.get('/role/:id', roleController.getById);
router.post('/role/', (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next), roleController.add);
router.put('/role/:id', (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next), roleController.update);
router.delete('/role/:id', (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next), roleController.delete);

/* user router */
router.get('/user', userController.list);
router.get('/user/:id', userController.getById);
router.post('/user/', userController.add);
router.put('/user/:id', userController.update);
router.delete('/user/:id', (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next), userController.delete);

/* user setting router */
router.get('/user-setting', userSettingController.list);
router.get('/user-setting/:id', userSettingController.getById);
router.post('/user-setting/', userSettingController.add);
router.put('/user-setting/:id', userSettingController.update);
router.delete('/user-setting/:id', (req, res, next) => authController.authenticateRole([roles.GOD], req, res, next), userSettingController.delete);

module.exports = router;