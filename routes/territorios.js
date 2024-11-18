// routes/territorios.js
const { Router } = require('express');
const territoriosController = require('../controllers/territoriosController');

const router = Router();

router.get('/', territoriosController.getAllTerritorios);
router.get('/:id', territoriosController.getTerritorioById);
router.post('/', territoriosController.createTerritorio);
router.put('/:id', territoriosController.updateTerritorio);
router.delete('/:id', territoriosController.deleteTerritorio);

module.exports = router;
