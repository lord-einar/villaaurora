// routes/users.js
const { Router } = require('express');
 const adminMiddleware = require('../middlewares/adminMiddleware');
 const {createUser, getUserById, renderUserList, updateUserRoles, getAll} = require('../controllers/usersController')

const router = Router();

router.post('/', createUser);
router.get('/', getAll);

// Ruta para listar los usuarios
router.get('/manage', renderUserList);

// Ruta para actualizar roles
router.post('/:id/roles', updateUserRoles);

router.get('/:id', getUserById);

module.exports = router;
