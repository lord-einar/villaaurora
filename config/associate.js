const associateModels = (db) => {
    // Asociaciones entre los modelos
  
    // Territorios y Manzanas
    db.Territorio.hasMany(db.Manzana, { foreignKey: 'id_territorio', as: 'manzanas' });
    db.Manzana.belongsTo(db.Territorio, { foreignKey: 'id_territorio', as: 'territorio' });
  
    // Puntos de Encuentro (ejemplo si tiene alguna relación)
    // Aquí puedes agregar relaciones adicionales si es necesario
  };
  
  module.exports = associateModels;
  