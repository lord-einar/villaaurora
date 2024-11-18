// services/usersService.js
const { User } = require('../models/User');

const findOrCreateUserByGoogleId = async (profile) => {
  try {
    let user = await User.findOne({ where: { googleId: profile.id } });
    if (!user) {
      user = await User.create({
        googleId: profile.id,
        email: profile.emails[0].value,
        displayName: profile.displayName,
        photoUrl: profile.photos[0].value // Guardamos la URL de la foto de perfil
      });
    } else {
      // Actualizar la foto de perfil en caso de que haya cambiado
      user.photoUrl = profile.photos[0].value;
      await user.save();
    }
    return user;
  } catch (error) {
    throw new Error('Error al buscar o crear usuario');
  }
};

const findUserById = async (id) => {
  try {
    return await User.findByPk(id);
  } catch (error) {
    throw new Error('Error al encontrar usuario por ID');
  }
};

const getAllUsers = async () => {
  try {
    return await User.findAll(); // Esto debería devolver todos los usuarios
  } catch (error) {
    console.error('Error al obtener usuarios:', error.message);
    throw new Error('Error al obtener la lista de usuarios');
  }
}

const updateRoles = async (userId, roles) => {
  console.log('id:', userId)
  const user = await User.findOne({googleId: userId});
  console.log(user)
  try {
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    console.log(user)
    user.conductor = roles.conductor ?? user.conductor;
    user.admin = roles.admin ?? user.admin;

    await user.save();
    return user;
  } catch (error) {
    throw new Error('Error al actualizar los roles');
  }
};



module.exports = { findOrCreateUserByGoogleId, findUserById, updateRoles, getAllUsers };
