'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     return await queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        }, 
        nome: {
          type: Sequelize.STRING,
          allowNull: false
        },
        mail: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
        },
        senha:{
          type: Sequelize.STRING,
          allowNull: false
        },
        telefone:{
          type: Sequelize.INTEGER,
          allowNull: false
        },
     });
  },

  down: async (queryInterface) => {
    
     return await queryInterface.dropTable('users');
     
  }
};
