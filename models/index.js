'use strict';

const fs = require('fs');
const path = require('path');
const { sequelize } = require('../config/db.config');
const associateModels = require('../config/associate');
const basename = path.basename(__filename);
const db = {};

// Cargar todos los modelos en el objeto `db`
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file));
    const modelName = Object.keys(model)[0]; // Obtener el nombre del modelo exportado
    db[modelName] = model[modelName]; // Asignar el modelo al objeto db
  });

// Configurar las asociaciones
associateModels(db);

db.sequelize = sequelize;

module.exports = db;
