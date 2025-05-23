const express = require('express');
const router = express.Router();

const userController = require('../controllers/users');

router.post('/users', userController.criarUsuario);
router.get('/users', userController.listarUsuarios);
router.put('/users/:id', userController.editarUsuario);
router.delete('/users/:id', userController.deletarUsuario);


const tasksController = require('../controllers/tasks');

router.post('/tasks', tasksController.criarTasks);
router.get('/tasks', tasksController.listarTasks);
router.put('/tasks/:id', tasksController.editarTasks);
router.delete('/tasks/:id', tasksController.excluirTasks);


const categoriesController = require('../controllers/categories');

router.get('/categories', categoriesController.listarCategorias);


const activitiesController = require('../controllers/activities');

router.post('/tasks/:task_id/activities', activitiesController.criarAtividades);
router.get('/tasks/:task_id/activities', activitiesController.listarAtividades);
router.put('/tasks/:task_id/activities/:id', activitiesController.editarAtividades);
router.delete('/tasks/:task_id/activities/:id', activitiesController.deletarAtividades); 


const commentsController = require('../controllers/comments');

router.post('/tasks/:task_id/comments', commentsController.criarComentario);
router.get('/tasks/:task_id/comments', commentsController.listarComentariosTask);
router.put('/tasks/:task_id/comments/:id', commentsController.editarComentario);
router.delete('/tasks/:task_id/comments/:id', commentsController.excluirComentario);


const prioritiesController = require('../controllers/priorities');

router.get('/priorities', prioritiesController.listarPrioridades);


const task_priorityController = require('../controllers/task_priority');

router.post('/tasks/:task_id/priority', task_priorityController.criarTaskPrioridade);
router.get('/tasks/:task_id/priority', task_priorityController.listarTasksPorPrioridade);
router.put('/tasks/:task_id/priority/:id', task_priorityController.editarTaskPrioridade);
router.delete('/tasks/:task_id/priority/:id', task_priorityController.excluirTaskPrioridade);


const remindersController = require('../controllers/reminders');

router.post('/tasks/:task_id/reminders', remindersController.criarLembrete);
router.get('/tasks/:task_id/reminders', remindersController.listarLembretes);
router.put('/tasks/:task_id/reminders/:id', remindersController.editarLembrete);
router.delete('/tasks/:task_id/reminders/:id', remindersController.excluirLembrete);


const tagsController = require('../controllers/tags');

router.post('/tasks/:task_id/tags', tagsController.criarTag);
router.get('/tasks/:task_id/tags', tagsController.listarTags);
router.put('/tasks/:task_id/tags/:id', tagsController.editarTag);
router.delete('/tasks/:task_id/tags/:id', tagsController.excluirTag);

const task_tagsController = require('../controllers/task_tags');

router.post('/tags/task_tags', task_tagsController.criarTaskTag);
router.put('/tags/task_tags/:id', task_tagsController.editarTaskTag);
router.delete('/tags/task_tags', task_tagsController.excluirTaskTag);

