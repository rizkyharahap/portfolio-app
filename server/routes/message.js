const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message');
const requiredLogin = require('../middlewares/requireLogin');

router.get('/', requiredLogin, messageController.getAllMessages);

router.get('/:id', requiredLogin, messageController.getMessageById);

router.post('/', messageController.addNewMessage);

module.exports = router;
