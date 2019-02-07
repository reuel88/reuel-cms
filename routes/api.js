const express = require('express');
const router = express.Router();

const profileController = require('../controllers/profileController');
const roleController = require('../controllers/roleController');
const userController = require('../controllers/userController');
const userSettingController = require('../controllers/userSettingController');

/* profile router */
router.get('/profile',  profileController.list);
router.get('/profile/:id',  profileController.getById);
router.post('/profile/',  profileController.add);
router.put('/profile/:id',  profileController.update);
router.delete('/profile/:id',  profileController.delete);

/* role router */
router.get('/role',  roleController.list);
router.get('/role/:id',  roleController.getById);
router.post('/role/',  roleController.add);
router.put('/role/:id',  roleController.update);
router.delete('/role/:id',  roleController.delete);

/* user router */
router.get('/user',  userController.list);
router.get('/user/:id',  userController.getById);
router.post('/user/',  userController.add);
router.put('/user/:id',  userController.update);
router.delete('/user/:id',  userController.delete);

/* user setting router */
router.get('/user-setting',  userSettingController.list);
router.get('/user-setting/:id',  userSettingController.getById);
router.post('/user-setting/',  userSettingController.add);
router.put('/user-setting/:id',  userSettingController.update);
router.delete('/user-setting/:id',  userSettingController.delete);

module.exports = router;