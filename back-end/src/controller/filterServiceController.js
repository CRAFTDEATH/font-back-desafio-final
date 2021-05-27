require("dotenv").config();
const { Service } = require('../model/Service')
const { Categorie } = require('../model/Categorie')
const { Sequelize } = require('sequelize')
const Op = Sequelize.Op

module.exports = {
    async valor(req, res) {
        const valor = req.query.valor
        const data = await Service.findAll({
            attributes: { exclude: ["categorias_id", "user_id"] },
            include: [{ association: 'user', attributes: { exclude: ['senha'] } }, { association: 'categorias'}],
            where: {
                valor:{
                    [Op.lte]: valor
                }   
            }
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
    async categoria(req, res) {
        const categoria = req.query.tipo
        const data = await Categorie.findAll({
            include: [{ association: 'services'}],
            where: {
                tipo:{
                    [Op.like]: `%${categoria}%`
                }
                
            }
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
    async descricao(req, res) {
        const descricao = req.query.descricao
        const data = await Service.findAll({
            include: [{ association: 'user', attributes: { exclude: ['senha'] } }, { association: 'categorias' }],
            where: {
                descricao:{
                    [Op.like]: `%${descricao}%`
                }
                
            }
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
    async disponibilidade(req, res) {
        const disponibilidade = req.query.disponibilidade
        const data = await Service.findAll({
            include: [{ association: 'user', attributes: { exclude: ['senha'] } }, { association: 'categorias' }],
            where: {
                disponibilidade: disponibilidade
            }
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
    }
}