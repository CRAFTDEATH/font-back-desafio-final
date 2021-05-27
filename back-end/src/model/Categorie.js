const { DataTypes, Model } = require('sequelize');

class Categorie extends Model {
   static init(connection) {
      super.init({
         tipo: {
            type: DataTypes.STRING,
            validate: {
               notEmpty: {
                  msg: "Campo Vazio, por favor preencha o campo de tipo"
               }
            }
         },
         descricao: {
            type: DataTypes.TEXT,
            validate: {
               notEmpty: {
                  msg: "Campo Vazio, por favor preencha o campo de descricao"
               }
            }
         },
      }, {

         sequelize: connection,
         tableName: "categories",
         freezeTableName: true,
      })
   }
   static associate(models){
      this.hasMany(models.Service, {
         foreignKey: 'categorias_id', as: 'services'
     })
   }
}

module.exports = { Categorie };