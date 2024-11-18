const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PuntoEncuentro = sequelize.define('PuntoEncuentro', {
    id_punto_encuentro: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    latitud: {
      type: DataTypes.DECIMAL(10, 8),
      allowNull: false
    },
    longitud: {
      type: DataTypes.DECIMAL(11, 8),
      allowNull: false
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'punto_encuentro'
  });

  return PuntoEncuentro;
};
