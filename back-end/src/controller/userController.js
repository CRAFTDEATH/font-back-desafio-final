require("dotenv").config();
const { User } = require("../model/User")

module.exports = {
    async index(req, res) {
        const data = await User.findAll({ attributes: { exclude: ['senha'] } })
        if (!data.length) {
            return res.json({
                statusCode: 404,
                message: 'not found',
                totalResults: 0,
                users: [{}]
            }).status(404)
        } else {
            return res.json({
                statusCode: 200,
                message: 'Ok',
                totalResults: data.length,
                users: data
            }).status(200)
        }
    },
    async show(req, res) {
        const { id } = req.params
        const data = await User.findOne({where:{id:id}})
        if (!data) {
            res.json({
                statusCode: 404,
                message: "not found",
                totalResults: 0,
                user: {}
            }).status(404)
        } else {
            res.json({
                statusCode: 200,
                message: "ok",
                totalResults: 1,
                users: data
            }).status(200)
        }
    },

    async update(req, res) {
        const { id } = req.params
        const { nome, telefone } = req.body
        const data = await User.findOne({ where: { id: id } })
        if (!data) {
            res.json({
                statusCode: 404,
                message: "not found",
                totalResult: 0
            }).status(404)
        } else {
            try {
                await User.update({ nome: nome, telefone: telefone }, {
                    where: {
                        id: id
                    }
                })
                res.json({
                    statusCode: 200,
                    message: 'ok',
                    location: `${process.env.APP_URL}users/${id}`
                }).status(200)
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
        }
    },
}