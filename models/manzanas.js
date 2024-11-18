// models/Manzana.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.config');

const Manzana = sequelize.define('Manzana', {
  id_manzana: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  id_territorio: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  etiqueta: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'manzanas',
});

module.exports = { Manzana };
