const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');
const requiredLogin = require('../middlewares/requireLogin');

router.get('/', articleController.getAllArticles);

router.get('/:id', articleController.getArticleById);

router.post('/', requiredLogin, articleController.addNewArticle);

router.patch('/:id', requiredLogin, articleController.updateArticle);

router.delete('/:id', requiredLogin, articleController.deleteArticle);

module.exports = router;
