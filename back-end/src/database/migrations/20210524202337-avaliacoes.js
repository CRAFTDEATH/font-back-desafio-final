'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     return await queryInterface.createTable('avaliacoes', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        nota: {
          type: Sequelize.INTEGER,
          allowNull: false
        }, 
        feedback:{
          type: Sequelize.TEXT,
          allowNull: false
        },
        recomendacao:{
          type: Sequelize.BOOLEAN,
          allowNull: false
        },
        services_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'services', key: 'id' },
        },
     });
     
  },

  down: async (queryInterface, Sequelize) => {
   
    return await queryInterface.dropTable('avaliacoes');
     
  }
};
