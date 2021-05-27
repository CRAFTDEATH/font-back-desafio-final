require("dotenv").config();
const bcrypt = require("bcrypt")
const { User } = require("../model/User")

module.exports = {
    async register(req, res){
        const { nome, mail, senha, telefone } = req.body
        const hash = await bcrypt.hash(senha, 10)
        try {
            const user = await User.create({ nome, mail, senha: hash, telefone })
            return res.json({
                statusCode: 201,
                message: "Created",
                users: user,
                location: `${process.env.APP_URL}users/${user.id}`

            }).status(201)
        } catch (err) {
            const { errors } = err

            let custom = []

            for (let i = 0; i < errors.length; i++) {

                let items = {
                    field: errors[i].path,
                    message: errors[i].message
                }
                custom.push(items)
            }

            return res.status(400).json({
                statusCode: 400,
                message: "bad request",
                totalErrors: errors.length,
                errors: custom
            })
        }
    },
    async confirm(req, res){
        const {mail, senha} = req.body
        const dados = await User.findOne({where:{mail:mail}})
        
        if(dados == null){
            res.json({
                statusCode: 401,
                message: 'Unautorized',
                auth: false,
            }).status(401)
           
        } else{
            const compare = await bcrypt.compare(senha, dados.senha)
            if(compare){
                res.json({
                    statusCode: 200,
                    message: 'Ok',
                    auth: true,
                    id: dados.id,
                    mail: dados.mail
                }).status(200)
            } else {
                res.json({
                    statusCode: 401,
                    message: 'Unautorized',
                    auth: false
                }).status(401)
            }
        } 
    },
}