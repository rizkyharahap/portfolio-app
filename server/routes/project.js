const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project');
const requiredLogin = require('../middlewares/requireLogin');

router.get('/', projectController.getAllprojects);

router.get('/:id', projectController.getProjectById);

router.post('/', requiredLogin, projectController.addNewProject);

router.patch('/:id', requiredLogin, projectController.updateProject);

router.delete('/:id', requiredLogin, projectController.deleteProject);

module.exports = router;
