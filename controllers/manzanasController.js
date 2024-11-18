const manzanasService = require('../services/manzanasService');

const getAllManzanas = async (req, res, next) => {
  try {
    const manzanas = await manzanasService.getAllManzanas();
    res.json(manzanas);
  } catch (error) {
    next(error);
  }
};

const getManzanaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const manzana = await manzanasService.getManzanaById(id);
    if (!manzana) return res.status(404).json({ message: 'Manzana no encontrada' });
    res.json(manzana);
  } catch (error) {
    next(error);
  }
};

const createManzana = async (req, res, next) => {
  try {
    const manzana = await manzanasService.createManzana(req.body);
    res.status(201).json(manzana);
  } catch (error) {
    next(error);
  }
};

const updateManzana = async (req, res, next) => {
  try {
    const { id } = req.params;
    const manzana = await manzanasService.updateManzana(id, req.body);
    res.json(manzana);
  } catch (error) {
    next(error);
  }
};

const deleteManzana = async (req, res, next) => {
  try {
    const { id } = req.params;
    await manzanasService.deleteManzana(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllManzanas,
  getManzanaById,
  createManzana,
  updateManzana,
  deleteManzana
};
