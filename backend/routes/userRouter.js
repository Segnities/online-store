const express = require('express');

const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.post('/refresh-token', UserController.refresh);
router.get('/auth',UserController.auth);

module.exports = router;