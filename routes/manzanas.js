// routes/manzanas.js
const { Router } = require('express');
const manzanasController = require('../controllers/manzanasController');

const router = Router();

router.get('/', manzanasController.getAllManzanas);
router.get('/:id', manzanasController.getManzanaById);
router.post('/', manzanasController.createManzana);
router.put('/:id', manzanasController.updateManzana);
router.delete('/:id', manzanasController.deleteManzana);

module.exports = router;
