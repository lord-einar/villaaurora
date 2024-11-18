const { Manzana, Territorio } = require('../models');

const getAllManzanas = async () => {
  return await Manzana.findAll({ include: [Territorio] });
};

const getManzanaById = async (id) => {
  return await Manzana.findByPk(id, { include: [Territorio] });
};

const createManzana = async (data) => {
  return await Manzana.create(data);
};

const updateManzana = async (id, data) => {
  const manzana = await Manzana.findByPk(id);
  if (!manzana) throw new Error('Manzana no encontrada');
  return await manzana.update(data);
};

const deleteManzana = async (id) => {
  return await Manzana.destroy({ where: { id_manzana: id } });
};

module.exports = {
  getAllManzanas,
  getManzanaById,
  createManzana,
  updateManzana,
  deleteManzana
};
