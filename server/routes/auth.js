const express = require('express');
const router = express.Router();
const userController = require('../controllers/auth');

router.post('/login', userController.loginUser);

module.exports = router;
