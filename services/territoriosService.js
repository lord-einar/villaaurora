const { Territorio } = require('../models');

const getAllTerritorios = async () => {
  return await Territorio.findAll();
};

const getTerritorioById = async (id) => {
  return await Territorio.findByPk(id);
};

const createTerritorio = async (data) => {
  return await Territorio.create(data);
};

const updateTerritorio = async (id, data) => {
  const territorio = await Territorio.findByPk(id);
  if (!territorio) throw new Error('Territorio no encontrado');
  return await territorio.update(data);
};

const deleteTerritorio = async (id) => {
  return await Territorio.destroy({ where: { id_territorio: id } });
};

module.exports = {
  getAllTerritorios,
  getTerritorioById,
  createTerritorio,
  updateTerritorio,
  deleteTerritorio
};
