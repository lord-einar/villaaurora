const puntoEncuentroService = require('../services/puntoEncuentroService');

const getAllPuntosEncuentro = async (req, res, next) => {
  try {
    const puntos = await puntoEncuentroService.getAllPuntosEncuentro();
    res.json(puntos);
  } catch (error) {
    next(error);
  }
};

const getPuntoEncuentroById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const punto = await puntoEncuentroService.getPuntoEncuentroById(id);
    if (!punto) return res.status(404).json({ message: 'Punto de encuentro no encontrado' });
    res.json(punto);
  } catch (error) {
    next(error);
  }
};

const createPuntoEncuentro = async (req, res, next) => {
  try {
    const punto = await puntoEncuentroService.createPuntoEncuentro(req.body);
    res.status(201).json(punto);
  } catch (error) {
    next(error);
  }
};

const updatePuntoEncuentro = async (req, res, next) => {
  try {
    const { id } = req.params;
    const punto = await puntoEncuentroService.updatePuntoEncuentro(id, req.body);
    res.json(punto);
  } catch (error) {
    next(error);
  }
};

const softDeletePuntoEncuentro = async (req, res, next) => {
  try {
    const { id } = req.params;
    const punto = await puntoEncuentroService.softDeletePuntoEncuentro(id);
    res.json(punto);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPuntosEncuentro,
  getPuntoEncuentroById,
  createPuntoEncuentro,
  updatePuntoEncuentro,
  softDeletePuntoEncuentro
};
