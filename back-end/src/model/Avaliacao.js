const { DataTypes, Model } = require('sequelize');

class Avaliacao extends Model {
   static init(connection) {
      super.init({
         nota: {
            type: DataTypes.INTEGER,
            validate: {
               notEmpty: {
                  msg: "Campo Vazio, por favor preencha o campo de nota"
               }
            }
         },
         feedback: {
            type: DataTypes.TEXT,
            validate: {
               notEmpty: {
                  msg: "Campo Vazio, por favor preencha o campo de feedback"
               }
            }
         },
         recomendacao: {
            type: DataTypes.BOOLEAN,
            validate: {
               notEmpty: {
                  msg: "Campo Vazio, por favor preencha o campo de recomedação"
               }
            }
         },
         services_id: {
            type: DataTypes.INTEGER,
            
         }

      }, {

         sequelize: connection,
         tableName: "avaliacoes",
         freezeTableName: true,
      })
   }
   static associate(models) {
      this.belongsTo(models.Service, {
         foreignKey: 'services_id', as: 'services'
      })
   }
}

module.exports = { Avaliacao }