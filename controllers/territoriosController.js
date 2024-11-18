const territoriosService = require('../services/territoriosService');

const getAllTerritorios = async (req, res, next) => {
  try {
    const territorios = await territoriosService.getAllTerritorios();
    res.json(territorios);
  } catch (error) {
    next(error);
  }
};

const getTerritorioById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const territorio = await territoriosService.getTerritorioById(id);
    if (!territorio) return res.status(404).json({ message: 'Territorio no encontrado' });
    res.json(territorio);
  } catch (error) {
    next(error);
  }
};

const createTerritorio = async (req, res, next) => {
  try {
    const territorio = await territoriosService.createTerritorio(req.body);
    res.status(201).json(territorio);
  } catch (error) {
    next(error);
  }
};

const updateTerritorio = async (req, res, next) => {
  try {
    const { id } = req.params;
    const territorio = await territoriosService.updateTerritorio(id, req.body);
    res.json(territorio);
  } catch (error) {
    next(error);
  }
};

const deleteTerritorio = async (req, res, next) => {
  try {
    const { id } = req.params;
    await territoriosService.deleteTerritorio(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTerritorios,
  getTerritorioById,
  createTerritorio,
  updateTerritorio,
  deleteTerritorio
};
