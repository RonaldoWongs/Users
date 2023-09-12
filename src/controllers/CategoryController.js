// CategoryController.js
const Category = require('../models/Category');

// Método para crear una nueva categoría
async function createCategory(req, res) {
  try {
    const { name, description } = req.body;
    const category = await Category.create({ name, description });
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudo crear la categoría.' });
  }
}

// Método para obtener todas las categorías
async function getAllCategories(req, res) {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudieron obtener las categorías.' });
  }
}

module.exports = {
  createCategory,
  getAllCategories,
};
