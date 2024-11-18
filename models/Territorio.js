// models/Territorio.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.config');

const Territorio = sequelize.define('Territorio', {
  id_territorio: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  mapa: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'territorios',
});

module.exports = { Territorio };
