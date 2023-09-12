const User = require('../models/User');

async function createUser(req, res) {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudo crear el usuario.' });
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudieron obtener los usuarios.' });
  }
}

async function getUserById(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudo obtener el usuario.' });
  }
}

async function updateUser(req, res) {
  const { id } = req.params;
  const { username, email, password } = req.body;
  try {
    const user = await User.findByPk(id);
    if (user) {
      user.username = username;
      user.email = email;
      user.password = password;
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudo actualizar el usuario.' });
  }
}

async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.json({ message: 'Usuario eliminado.' });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudo eliminar el usuario.' });
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
