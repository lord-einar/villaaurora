const { Router } = require('express');
const userRoutes = require('./users');
const authRoutes = require('./auth');
const profileRoutes = require('./profile');
const territorioRoutes = require('./territorios');
const manzanaRoutes = require('./manzanas');
const puntoEncuentroRoutes = require('./puntoEncuentro');


const router = Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/profile', profileRoutes);
router.use('/territorios', territorioRoutes);
router.use('/manzanas', manzanaRoutes);
router.use('/punto_encuentro', puntoEncuentroRoutes);

module.exports = router;
