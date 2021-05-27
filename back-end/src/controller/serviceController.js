require("dotenv").config();
const { Service } = require('../model/Service')
const { User } = require('../model/User')

module.exports = {
    async index(req, res) {

        const data = await Service.findAll({
            attributes: { exclude: ["categorias_id", "user_id"] },
            include: [{ association: 'user', attributes: { exclude: ['senha'] } }, { association: 'categorias', }],
        })
        if (!data.length) {
            return res.json({
                statusCode: 404,
                message: 'not found',
                totalResults: 0,
                service: [{}]
            }).status(404)
        } else {
            return res.json({
                statusCode: 200,
                message: 'Ok',
                totalResults: data.length,
                service: data
            }).status(200)
        }
    },
    async show(req, res) {
        const { id } = req.params
        const data = await Service.findOne({
            where: { id: id },
            attributes: { exclude: ["categorias_id", "user_id"] },
            include: [{ association: 'user', attributes: { exclude: ['senha'] } }, { association: 'categorias', }],
        })
        if (!data) {
            return res.json({
                statusCode: 404,
                message: 'not found',
                totalResults: 0,
                service: [{}]
            }).status(404)
        } else {
            return res.json({
                statusCode: 200,
                message: 'Ok',
                totalResults: data.length,
                service: data
            }).status(200)
        }
    },
    async create(req, res) {
        const { titulo, descricao, valor, disponibilidade, categorias_id, user_id } = req.body
        try {
            const service = await Service.create({ titulo, descricao, valor, disponibilidade, categorias_id, user_id })
            return res.json({
                statusCode: 201,
                message: "Created",
                services: service,
                location: `${process.env.APP_URL}services/${service.id}`

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
    async update(req, res) {
        const { id } = req.params
        const { titulo, descricao, valor, disponibilidade, categorias_id, user_id } = req.body
        const data = await Service.findOne({ where: { id: id } })
        if (!data) {
            res.json({
                statusCode: 404,
                message: "not found",
                totalResult: 0
            }).status(404)
        } else {
            try {
                await Service.update({ titulo, descricao, valor, disponibilidade, categorias_id, user_id}, {
                    where: {
                        id: id
                    }
                })
                res.json({
                    statusCode: 200,
                    message: 'ok',
                    location: `${process.env.APP_URL}services/${id}`
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
    async destroy(req, res) {
        const { id } = req.params
        const data = await Service.findByPk(id)
        if (!data) {
            res.json({
                statusCode: 404,
                message: "not found",
                recordDeleted: 0
            }).status(404)
        } else {
            const service = await Service.destroy({
                where: {
                    id: id
                }
            })
            res.json({
                statusCode: 200,
                message: "Ok",
                recordDeleted: service,
            }).status(200)
        }
    }
}
