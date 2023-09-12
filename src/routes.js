const express = require('express');
const UserController = require('./controllers/UserController');
const TaskController = require('./controllers/TaskController');
const CategoryController = require('./controllers/CategoryController'); // Importa el controlador de categorías

const router = express.Router();

// Rutas relacionadas con usuarios
router.post('/users', UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);
router.get('/users/:userId/tasks', TaskController.getUserTasks);

// Rutas relacionadas con tareas
router.post('/tasks', TaskController.createTask);
router.get('/tasks', TaskController.getAllTasks);
router.get('/tasks/:id', TaskController.getTaskById);
router.put('/tasks/:id', TaskController.updateTask);
router.delete('/tasks/:id', TaskController.deleteTask);

// Rutas relacionadas con categorías
router.post('/categories', CategoryController.createCategory); // Ruta para crear una categoría
router.get('/categories', CategoryController.getAllCategories); // Ruta para obtener todas las categorías

module.exports = router;
