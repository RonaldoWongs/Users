const Task = require('../models/Task');
const Category = require('../models/Category'); // Asegúrate de importar el modelo de Categoría si no lo has hecho antes

async function createTask(req, res) {
  try {
    const { title, description, completed, categoryId } = req.body;
    const task = await Task.create({ title, description, completed, categoryId });
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudo crear la tarea.' });
  }
}

async function getAllTasks(req, res) {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudieron obtener las tareas.' });
  }
}

async function getTaskById(req, res) {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ message: 'Tarea no encontrada.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudo obtener la tarea.' });
  }
}

async function updateTask(req, res) {
  const { id } = req.params;
  const { title, description, completed, categoryId } = req.body;
  try {
    const task = await Task.findByPk(id);
    if (task) {
      task.title = title;
      task.description = description;
      task.completed = completed;
      task.categoryId = categoryId;
      await task.save();
      res.json(task);
    } else {
      res.status(404).json({ message: 'Tarea no encontrada.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudo actualizar la tarea.' });
  }
}

async function deleteTask(req, res) {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (task) {
      await task.destroy();
      res.json({ message: 'Tarea eliminada.' });
    } else {
      res.status(404).json({ message: 'Tarea no encontrada.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudo eliminar la tarea.' });
  }
}

async function getUserTasks(req, res) {
  const { userId } = req.params;
  try {
    // Utiliza Sequelize para buscar todas las tareas del usuario con userId incluyendo sus categorías
    const tasks = await Task.findAll({
      where: { userId }, // Asegúrate de tener un campo userId en tus tareas
      include: [Category], // Incluye la relación con la categoría
    });
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudieron obtener las tareas del usuario.' });
  }
}

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
  getUserTasks, // Agrega el nuevo método a la exportación
};
