const {Router} = require('express')
const asyncHandler = require("express-async-handler")
const apiKey = require('../routes/middleware/apiKey')
const serviceController = require('../controller/serviceController')
const router = Router()  


/**
 * @api {get} /services
 * @apiGroup Serviços
 * @apiVersion 1.0.0
 * @apiDescription essa API lista registros de servios
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiSuccessExample {json} Success-Reponse:
 *    HTTP/1.1 200 Ok{
 *       "statusCode": 200,
 *       "message": "Ok",
 *       "totalResults": 2,
 *        "service": [
 *       {
 *           "id": 1,
 *           "titulo": "manutenção em encanamento hidraulico",
 *           "descricao": "cano",
 *           "valor": "20000.00",
 *           "disponibilidade": false,
 *           "user": {
 *               "id": 1,
 *               "nome": "leopoldo",
 *               "mail": "lopoldo@hotmail.com",
 *               "telefone": 123456789
 *           },
 *           "categorias": {
 *               "id": 1,
 *               "tipo": "Encanador",
 *               "descricao": "profissional responsavel por instalar canos e fazer manutençao de esgoto"
 *           }
 *       }
 *   ]
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 404 Not Found
 *    {
 *       "statusCode": 404,
 *       "messsage": "Not Found",
 *       "totalResults":0   
 *    }  
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 401 Unautorized
 *    {
 *       "statusCode": 401,
 *       "message": "Unautorized",
 *       "auth": false
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *        "message": "Internal Server Error",
 *        "statusCode": 500
 *    }
 */

router.get('/services', apiKey, asyncHandler(serviceController.index))
/**
 * @api {get} /services/:id
 * @apiGroup Serviços
 * @apiVersion 1.0.0
 * @apiDescription essa API busca registros de serviço
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiParam {Integer} id chave primaria
 * @apiSuccessExample {json} Success-Reponse:
 *    HTTP/1.1 200 Ok {
 *      "statusCode": 200,
 *      "message": "Ok",
 *      "totalResults": 1,
 *      "service": {
 *      "id": 1,
 *      "titulo": "manutenção em encanamento hidraulico",
 *      "descricao": "cano",
 *      "valor": "20000.00",
 *      "disponibilidade": false,
 *      "user": {
 *           "id": 1,
 *           "nome": "leopoldo",
 *           "mail": "lopoldo@hotmail.com",
 *           "telefone": 123456789
 *       },
 *       "categorias": {
 *           "id": 1,
 *           "tipo": "Encanador",
 *           "descricao": "profissional responsavel por instalar canos e fazer manutençao de esgoto"
 *       }
 *   }
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 404 Not Found
 *    {
 *       "statusCode": 404,
 *       "messsage": "Not Found",
 *       "totalResults":0   
 *    }  
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 401 Unautorized
 *    {
 *       "statusCode": 401,
 *       "message": "Unautorized",
 *       "auth": false
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *        "message": "Internal Server Error",
 *        "statusCode": 500
 *    }
 */

router.get('/services/:id', apiKey,  asyncHandler(serviceController.show))
/**
 * @api {post} /services
 * @apiGroup Serviços
 * @apiVersion 1.0.0
 * @apiDescription essa api salva um registro de serviço
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiParam {String} titulo titulo do anuncio
 * @apiParam {String} descricao descricao do anuncio
 * @apiParam {Float} valor valor da mao de obra
 * @apiParam {Boolean} disponibilidade disponivel retorna true se sim e false se nao
 * @apiParam {Integer} categorias_id chave primaria da categoria
 * @apiParam {Integer} user_id chave primaria de usuario
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 201 Created{
 *      "statusCode": 201,
 *      "message": "Created",
 *      "services": {
 *         "id": 5,
 *          "titulo": "Reparo de bomba da agua",
 *          "descricao": "realizo instalações e reparo em equipamento de bom da agua",
 *          "valor": "10000.00",
 *          "disponibilidade": true,
 *          "categorias_id": 1,
 *          "user_id": 1
 *   },
 *   "location": "http://localhost:3333/services/5"
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "statusCode": 400,
 *        "message": "bad request",
 *        "totalErrors": 2,
 *        "errors": [
 *           {
 *              "field": "titulo",
 *              "message": "Campo Vazio, por favor preencha o campo de titulo"
 *           },
 *           {
 *              "field": "valor",
 *              "message": "Campo Invalido, Por Favor Digite Somente Numeros em valor"
 *           }
 *   ]
 *    }  
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 401 Unautorized
 *    {
 *       "statusCode": 401,
 *       "message": "Unautorized",
 *       "auth": false
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *        "message": "Internal Server Error",
 *        "statusCode": 500
 *    }
 */

router.post('/services', apiKey,  asyncHandler(serviceController.create))
/**
 * @api {put} /services/:id
 * @apiGroup Serviços
 * @apiVersion 1.0.0
 * @apiDescription essa api atualiza um registro de serviço
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiParam {Integer} id chave primaria do serviço
 * @apiParam {String} titulo titulo do anuncio
 * @apiParam {String} descricao descricao do anuncio
 * @apiParam {Float} valor valor da mao de obra
 * @apiParam {Boolean} disponibilidade disponivel retorna true se sim e false se nao
 * @apiParam {Integer} categorias_id chave primaria da categoria
 * @apiParam {Integer} user_id chave primaria de usuario
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 201 Ok{
 *      "statusCode": 201,
 *      "message": "Ok",
 *      "services": {
 *         "id": 5,
 *          "titulo": "Reparo de bomba da agua",
 *          "descricao": "realizo instalações e reparo em equipamento de bom da agua",
 *          "valor": "500.00",
 *          "disponibilidade": false,
 *          "categorias_id": 1,
 *          "user_id": 1
 *   },
 *   "location": "http://localhost:3333/services/5"
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "statusCode": 400,
 *        "message": "bad request",
 *        "totalErrors": 2,
 *        "errors": [
 *           {
 *              "field": "titulo",
 *              "message": "Campo Vazio, por favor preencha o campo de titulo"
 *           },
 *           {
 *              "field": "valor",
 *              "message": "Campo Invalido, Por Favor Digite Somente Numeros em valor"
 *           }
 *   ]
 *    }  
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 401 Unautorized
 *    {
 *       "statusCode": 401,
 *       "message": "Unautorized",
 *       "auth": false
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *        "message": "Internal Server Error",
 *        "statusCode": 500
 *    }
 */

router.put('/services/:id', apiKey,  asyncHandler(serviceController.update))
/**
 * @api {delete} /services/:id
 * @apiGroup Serviços
 * @apiVersion 1.0.0
 * @apiDescription essa API deleta registro da tabela de serviço
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiParam {Integer} id chave primaria da tabela serviços
 * @apiSuccessExample {json} Success-Reponse:
 *    HTTP/1.1 200 Ok{
 *       "statusCode": 200,
 *       "message": "Ok",
 *       "recordDeleted": 1
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 404 Not Found
 *    {
 *       "statusCode": 404,
 *       "messsage": "Not Found",
 *       "recordDeleted": 0  
 *    }  
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 401 Unautorized
 *    {
 *       "statusCode": 401,
 *       "message": "Unautorized",
 *       "auth": false
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *        "message": "Internal Server Error",
 *        "statusCode": 500
 *    }
 */
 
router.delete('/services/:id', apiKey,  asyncHandler(serviceController.destroy))
 
module.exports = router