const { Sequelize } = require("sequelize")
const dbconfig = require("../config/dbConfig")
const {User}  = require("../model/User")
const {Categorie} = require("../model/Categorie")
const {Service} = require("../model/Service")
const {Avaliacao} = require("../model/Avaliacao")


const connection = new Sequelize(dbconfig)

User.init(connection)
Categorie.init(connection)
Service.init(connection)
Avaliacao.init(connection)
User.associate(connection.models)
Categorie.associate(connection.models)
Service.associate(connection.models)
Avaliacao.associate(connection.models)



module.exports = connection