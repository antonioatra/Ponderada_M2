const express = require('express');
const router = express.Router();

// Controllers
const userController = require('../controllers/users');
const tasksController = require('../controllers/tasks');
const categoriesController = require('../controllers/categories');
const activitiesController = require('../controllers/activities');
const commentsController = require('../controllers/comments');
const prioritiesController = require('../controllers/priorities');
const task_priorityController = require('../controllers/task_priority');
const remindersController = require('../controllers/reminders');
const tagsController = require('../controllers/tags');
const task_tagsController = require('../controllers/task_tags');

// User routes
router.post('/users', userController.criarUsuario);
router.get('/users', userController.listarUsuarios);
router.put('/users/:id', userController.editarUsuario);
router.delete('/users/:id', userController.deletarUsuario);

// Task routes
router.post('/tasks', tasksController.criarTasks);
router.get('/tasks/:user_id', tasksController.listarTasks);
router.put('/tasks/:id', tasksController.editarTasks);
router.delete('/tasks/:id', tasksController.excluirTasks);

// Category routes
router.get('/categories', categoriesController.listarCategorias);

// Activity routes
router.post('/tasks/:task_id/activities', activitiesController.criarAtividades);
router.get('/tasks/:task_id/activities/:user_id', activitiesController.listarAtividades);
router.put('/tasks/:task_id/activities/:id', activitiesController.editarAtividades);
router.delete('/tasks/:task_id/activities/:id', activitiesController.deletarAtividades);

// Comment routes
router.post('/tasks/:task_id/comments', commentsController.criarComentario);
router.get('/tasks/:task_id/comments', commentsController.listarComentariosTask);
router.put('/tasks/:task_id/comments/:id', commentsController.editarComentario);
router.delete('/tasks/:task_id/comments/:id', commentsController.excluirComentario);

// Priority routes
router.get('/priorities', prioritiesController.listarPrioridades);

// Task priority routes
router.post('/tasks/:task_id/priority', task_priorityController.criarTaskPrioridade);
router.get('/tasks/:task_id/priority', task_priorityController.listarTasksPorPrioridade);
router.put('/tasks/:task_id/priority/:id', task_priorityController.editarTaskPrioridade);
router.delete('/tasks/:task_id/priority/:id', task_priorityController.excluirTaskPrioridade);

// Reminder routes
router.post('/tasks/:task_id/reminders', remindersController.criarLembrete);
router.get('/tasks/:task_id/reminders', remindersController.listarLembretes);
router.put('/tasks/:task_id/reminders/:id', remindersController.editarLembrete);
router.delete('/tasks/:task_id/reminders/:id', remindersController.excluirLembrete);

// Tag routes
router.post('/tasks/:task_id/tags', tagsController.criarTag);
router.get('/tasks/:task_id/tags', tagsController.listarTags);
router.put('/tasks/:task_id/tags/:id', tagsController.editarTag);
router.delete('/tasks/:task_id/tags/:id', tagsController.excluirTag);

// Task tag routes
router.post('/tags/task_tags', task_tagsController.criarTaskTag);
router.put('/tags/task_tags/:id', task_tagsController.editarTaskTag);
router.delete('/tags/task_tags', task_tagsController.excluirTaskTag);

module.exports = router;