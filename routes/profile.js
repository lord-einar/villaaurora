// routes/profile.js
const { Router } = require('express');
const usersService = require('../services/usersService');

const router = Router();

router.get('/', async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/'); // Redirigir a la página de inicio si no está autenticado
  }

  try {
    const user = await usersService.findUserById(req.user.id);
    res.render('profile', {
      displayName: user.displayName,
      email: user.email,
      photoUrl: user.photoUrl
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el perfil del usuario' });
  }
});

module.exports = router;
