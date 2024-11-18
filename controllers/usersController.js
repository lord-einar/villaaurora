// controllers/usersController.js
const { User } = require('../models/User');
const usersService = require('../services/usersService');

const createUser = async (req, res, next) => {
  try {
    const user = await usersService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error); // Pasamos el error al middleware de manejo de errores
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await usersService.findUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

const getAll = (async(req, res) => {
  const users = await User.findAll()
  console.log(users)
})


// Renderizar la lista de usuarios
const renderUserList = async (req, res, next) => {
  try {
    const users = await usersService.getAllUsers();
    console.log(users)
    res.render('userList', { users });
  } catch (error) {
    next(error); // Delegar el manejo del error al middleware de error
  }
};

// Actualizar roles de usuario
const updateUserRoles = async (req, res, next) => {
  const { id } = req.params;
  const { conductor, admin } = req.body;

  try {
    const updatedUser = await usersService.updateRoles(id, {
      conductor: conductor === 'on', // Convertir checkbox en booleano
      admin: admin === 'on',
    });
    res.redirect('/api/users/manage'); // Redirigir a la lista después de actualizar
  } catch (error) {
    next(error);
  }
};

module.exports = { createUser, getUserById, renderUserList, updateUserRoles, getAll };
