// routes/puntoEncuentro.js
const { Router } = require('express');
const puntoEncuentroController = require('../controllers/puntoEncuentroController');

const router = Router();

router.get('/', puntoEncuentroController.getAllPuntosEncuentro);
router.get('/:id', puntoEncuentroController.getPuntoEncuentroById);
router.post('/', puntoEncuentroController.createPuntoEncuentro);
router.put('/:id', puntoEncuentroController.updatePuntoEncuentro);
router.delete('/:id', puntoEncuentroController.softDeletePuntoEncuentro);

module.exports = router;
