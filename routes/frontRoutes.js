const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('layout/main', {
    pageTitle: 'Task Manager - Início',
    contentPage: 'home'
  });
});

// Tasks page
router.get('/tasks', (req, res) => {
  res.render('layout/main', {
    pageTitle: 'Minhas Tarefas',
    contentPage: 'tasks'
  });
});

// Users page
router.get('/users', (req, res) => {
  res.render('layout/main', {
    pageTitle: 'Usuários',
    contentPage: 'users'
  });
});

// About page
router.get('/about', (req, res) => {
  res.render('layout/main', {
    pageTitle: 'Sobre',
    contentPage: 'about'
  });
});

module.exports = router;