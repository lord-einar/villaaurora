// routes/auth.js
const { Router } = require('express');
const passport = require('passport');

const router = Router();

// Ruta para iniciar la autenticación con Google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Ruta de callback
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/api/profile'); // Redirigir al perfil después de autenticarse
  }
);

module.exports = router;
