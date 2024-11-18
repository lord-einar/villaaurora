const { PuntoEncuentro } = require('../models');

const getAllPuntosEncuentro = async () => {
  return await PuntoEncuentro.findAll();
};

const getPuntoEncuentroById = async (id) => {
  return await PuntoEncuentro.findByPk(id);
};

const createPuntoEncuentro = async (data) => {
  return await PuntoEncuentro.create(data);
};

const updatePuntoEncuentro = async (id, data) => {
  const punto = await PuntoEncuentro.findByPk(id);
  if (!punto) throw new Error('Punto de encuentro no encontrado');
  return await punto.update(data);
};

const softDeletePuntoEncuentro = async (id) => {
  const punto = await PuntoEncuentro.findByPk(id);
  if (!punto) throw new Error('Punto de encuentro no encontrado');
  punto.activo = false;
  return await punto.save();
};

module.exports = {
  getAllPuntosEncuentro,
  getPuntoEncuentroById,
  createPuntoEncuentro,
  updatePuntoEncuentro,
  softDeletePuntoEncuentro
};
