'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('manzanas', {
      id_manzana: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      id_territorio: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'territorios',
          key: 'id_territorio'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      etiqueta: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('manzanas');
  }
};
