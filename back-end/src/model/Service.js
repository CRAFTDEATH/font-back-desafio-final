const { DataTypes, Model } = require('sequelize');

class Service extends Model {
    static init(connection) {
        super.init({
            titulo: {
                type: DataTypes.TEXT,
                validate: {
                    notEmpty: {
                        msg: "Campo Vazio, por favor preencha o campo de titulo"
                    }
                }
            },
            descricao: {
                type: DataTypes.TEXT,
                validate: {
                    notEmpty: {
                        msg: "Campo Vazio, por favor preencha o campo de descrição"
                    }
                }
            },
            valor: {
                type: DataTypes.DECIMAL(10, 2),
                validate: {
                    notEmpty: {
                        msg: "Campo Vazio, por favor preencha o campo de valor"
                    },
                    isNumeric: {
                        args: true,
                        msg: "Campo Invalido, Por Favor Digite Somente Numeros em valor"
                    }
                }
            },
            disponibilidade: {
                type: DataTypes.BOOLEAN,
                validate: {
                    notEmpty: {
                        msg: "Campo Vazio, por favor preencha o campo de disponibilidade"
                    }
                }
            },
            categorias_id: {
                type: DataTypes.INTEGER,
                validate: {
                    notEmpty: {
                        msg: "Campo Vazio, Por Favor Preencha o Campo de id de categorias"
                    },
                    isNumeric: {
                        args: true,
                        msg: "Campo Invalido, Por Favor Digite Somente Numeros em categorias"
                    }
                }
            },
            user_id: {
                type: DataTypes.INTEGER,
                validate: {
                    notEmpty: {
                        msg: "Campo Vazio, Por Favor Preencha o Campo de id de usuario"
                    },
                    isNumeric: {
                        args: true,
                        msg: "Campo Invalido, Por Favor Digite Somente Numeros em usuario"
                    }
                }
            },
        }, {
            sequelize: connection,
            tableName: "services",
            freezeTableName: true,
        })
    }
    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: 'user_id', as: 'user'
        })
        this.belongsTo(models.Categorie, {
            foreignKey: 'categorias_id', as: 'categorias'
        })
        this.hasMany(models.Avaliacao, {
            foreignKey: 'services_id', as: 'avaliacaos'
        })
    }
}

module.exports = { Service }