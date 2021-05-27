require("dotenv").config();
const { Categorie } = require('../model/Categorie')

module.exports = {
    async index(req, res) {
        const data = await Categorie.findAll()
        if (!data.length) {
            return res.json({
                statusCode: 404,
                message: 'not found',
                totalResults: 0,
                categories: [{}]
            }).status(404)
        } else {
            return res.json({
                statusCode: 200,
                message: 'Ok',
                totalResults: data.length,
                categories: data
            }).status(200)
        }
    },
    async show(req, res) {
        const { id } = req.params
        const data = await Categorie.findOne({where:{id:id}})
        if (!data) {
            res.json({
                statusCode: 404,
                message: "not found",
                totalResults: 0,
                categories: {}
            }).status(404)
        } else {
            res.json({
                statusCode: 200,
                message: "ok",
                totalResults: 1,
                categories: data
            }).status(200)
        }
    },
    async create(req, res) {
        const { tipo, descricao } = req.body
        try {
            const categorie = await Categorie.create({tipo, descricao })
            return res.json({
                statusCode: 201,
                message: "Created",
                categories: categorie,
                location: `${process.env.APP_URL}categorias/${categorie.id}`

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
        const { tipo, descricao } = req.body
        const data = await Categorie.findOne({ where: { id: id } })
        if (!data) {
            res.json({
                statusCode: 404,
                message: "not found",
                totalResult: 0
            }).status(404)
        } else {
            try {
                await Categorie.update({ tipo, descricao}, {
                    where: {
                        id: id
                    }
                })
                res.json({
                    statusCode: 200,
                    message: 'ok',
                    location: `${process.env.APP_URL}categorias/${id}`
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
        const data = await Categorie.findByPk(id)
        if (!data) {
            res.json({
                statusCode: 404,
                message: "not found",
                recordDeleted: 0
            }).status(404)
        } else {
            const categorias = await Categorie.destroy({
                where: {
                    id: id
                }
            })
            res.json({
                statusCode: 200,
                message: "Ok",
                recordDeleted: categorias,
            }).status(200)
        }
    }
}
