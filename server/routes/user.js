const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const requiredLogin = require('../middlewares/requireLogin');

router.get('/', userController.getUser);

router.patch('/:id', requiredLogin, userController.updateUser);

module.exports = router;
