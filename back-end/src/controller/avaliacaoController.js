require("dotenv").config();
const { Avaliacao } = require('../model/Avaliacao')
const { Service } = require('../model/Service')

module.exports = {
    async index(req, res) {
        const data = await Service.findAll({include: [{ association: 'avaliacaos'}]})
        if (!data.length) {
            return res.json({
                statusCode: 404,
                message: 'not found',
                totalResults: 0,
                avaliacao: [{}]
            }).status(404)
        } else {
            return res.json({
                statusCode: 200,
                message: 'Ok',
                totalResults: data.length,
                services: data
            }).status(200)
        }
    },
    async show(req, res) {
        const { id } = req.params
        const data = await Service.findOne({ where: { id: id },include: [{ association: 'avaliacaos'}]})
        if (!data) {
            res.json({
                statusCode: 404,
                message: "not found",
                totalResults: 0,
                avaliacao: {}
            }).status(404)
        } else {
            res.json({
                statusCode: 200,
                message: "ok",
                totalResults: 1,
                services: data
            }).status(200)
        }
    },
    async create(req, res) {
        const { nota, feedback, recomendacao, services_id } = req.body
        try {
            const avaliacao = await Avaliacao.create({nota, feedback, recomendacao, services_id})
            return res.json({
                statusCode: 201,
                message: "Created",
                avaliacao: avaliacao,
                location: `${process.env.APP_URL}avaliacoes/${avaliacao.id}`

            }).status(201)
        } catch (err) {
            const { errors } = err
            console.log(err)
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
        const { nota, feedback, recomendacao, services_id } = req.body
        const data = await Avaliacao.findOne({ where: { id: id } })
        if (!data) {
            res.json({
                statusCode: 404,
                message: "not found",
                totalResult: 0
            }).status(404)
        } else {
            try {
                await Avaliacao.update({ nota, feedback, recomendacao, services_id }, {
                    where: {
                        id: id
                    }
                })
                res.json({
                    statusCode: 200,
                    message: 'ok',
                    location: `${process.env.APP_URL}avaliacoes/${id}`
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
        const data = await Avaliacao.findByPk(id)
        if (!data) {
            res.json({
                statusCode: 404,
                message: "not found",
                recordDeleted: 0
            }).status(404)
        } else {
            const avaliacao = await Avaliacao.destroy({
                where: {
                    id: id
                }
            })
            res.json({
                statusCode: 200,
                message: "Ok",
                recordDeleted: avaliacao,
            }).status(200)
        }
    }
}
