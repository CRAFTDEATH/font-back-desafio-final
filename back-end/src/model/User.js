const { DataTypes, Model } = require('sequelize');

class User extends Model {
   static init(connection) {
      super.init({
         nome: {
            type: DataTypes.STRING,
            validate:{
               notEmpty:{
                  msg:"Campo Vazio, por favor preencha o campo de nome"
               }
            }
         },
         mail: {
            type: DataTypes.STRING,
            unique:{
               msg:"Campo já existente, por favor digite email diferente",
            },
            validate:{
               isEmail:{
                  msg:"Campo invalido, por favor digite um email valido"
               },
               notEmpty:{
                  msg:"Campo Vazio, por favor preencha o campo de e-mail"
               },
            }
         },
         senha: {
            type: DataTypes.STRING,
            validate:{
               notEmpty:{
                  msg: "Campo vazio, por favor digite uma senha"
               },
            }
         },
         telefone: {
            type: DataTypes.INTEGER,
            validate:{
               isNumeric:{
                  msg: "Campo invalido, por favor digite somente numeros no campo telefone sem DD"
               },
               notEmpty:{
                  msg: "Campo vazio, por favor digite um numero de telefone"
               }
            }
         },
      }, {
         sequelize: connection,
         tableName: "users",
         freezeTableName: true,
      })
   }
   static associate(models) {
      this.hasMany(models.Service, {
          foreignKey: 'user_id', as: 'services'
      })
  }
}

module.exports = {User}