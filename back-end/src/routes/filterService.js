const {Router} = require('express')
const asyncHandler = require("express-async-handler")
const apiKey = require('../routes/middleware/apiKey')
const filterServiceController = require('../controller/filterServiceController')
const router = Router()  


/**
 * @api {get} /service/filter/valor
 * @apiGroup Filter
 * @apiVersion 1.0.0
 * @apiDescription essa API lista registros de serviços pelo seu valor
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiParam {Double} valor esse campo sera informado o valor do serviço
 * @apiSuccessExample {json} Success-Reponse:
 *    HTTP/1.1 200 Ok{
 *       "statusCode": 200,
 *       "message": "Ok",
 *       "totalResults": 1,
 *       "service": [
 *          {
 *           "id": 7,
 *           "titulo": "asas",
 *           "descricao": "asa",
 *           "valor": "12.00",
 *           "disponibilidade": true,
 *           "user": {
 *               "id": 1,
 *               "nome": "Sergio Moro",
 *               "mail": "sergiomoro@hotmail.com",
 *               "telefone": 123456789
 *           },
 *          "categorias": {
 *               "id": 1,
 *               "tipo": "Encanador",
 *               "descricao": "profissional responsavel por instalar canos e fazer manutençao de esgoto"
 *           }
 *       }
 *   ]
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
router.get('/service/filter/valor', apiKey, asyncHandler(filterServiceController.valor))
/**
 * @api {get} /service/filter/categoria
 * @apiGroup Filter
 * @apiVersion 1.0.0
 * @apiDescription essa API lista registros de serviços pelo sua categoria
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiParam {String} tipo esse campo sera informado a categoria do serviço
 * @apiSuccessExample {json} Success-Reponse:
 *    HTTP/1.1 200 Ok{
 *       "statusCode": 200,
 *       "message": "Ok",
 *       "totalResults": 1,
 *       "service": [
 *          {
 *           "id": 7,
 *           "titulo": "asas",
 *           "descricao": "asa",
 *           "valor": "12.00",
 *           "disponibilidade": true,
 *           "user": {
 *               "id": 1,
 *               "nome": "Sergio Moro",
 *               "mail": "sergiomoro@hotmail.com",
 *               "telefone": 123456789
 *           },
 *          "categorias": {
 *               "id": 1,
 *               "tipo": "Encanador",
 *               "descricao": "profissional responsavel por instalar canos e fazer manutençao de esgoto"
 *           }
 *       }
 *   ]
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
router.get('/service/filter/categoria', apiKey, asyncHandler(filterServiceController.categoria))
/**
 * @api {get} /service/filter/descricao
 * @apiGroup Filter
 * @apiVersion 1.0.0
 * @apiDescription essa API lista registros de serviços pela descrição
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiParam {String} descricao esse campo sera informado a descrição
 * @apiSuccessExample {json} Success-Reponse:
 *    HTTP/1.1 200 Ok{
 *       "statusCode": 200,
 *       "message": "Ok",
 *       "totalResults": 1,
 *       "service": [
 *          {
 *           "id": 7,
 *           "titulo": "asas",
 *           "descricao": "asa",
 *           "valor": "12.00",
 *           "disponibilidade": true,
 *           "user": {
 *               "id": 1,
 *               "nome": "Sergio Moro",
 *               "mail": "sergiomoro@hotmail.com",
 *               "telefone": 123456789
 *           },
 *          "categorias": {
 *               "id": 1,
 *               "tipo": "Encanador",
 *               "descricao": "profissional responsavel por instalar canos e fazer manutençao de esgoto"
 *           }
 *       }
 *   ]
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
router.get('/service/filter/descricao', apiKey, asyncHandler(filterServiceController.descricao))
/**
 * @api {get} /service/filter/disponibilidade
 * @apiGroup Filter
 * @apiVersion 1.0.0
 * @apiDescription essa API lista registros de serviços pela sua disponiblidade
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiParam {Boolean} disponibilidade esse campo sera informado a disponibilidade do serviço 
 * @apiSuccessExample {json} Success-Reponse:
 *    HTTP/1.1 200 Ok{
 *       "statusCode": 200,
 *       "message": "Ok",
 *       "totalResults": 1,
 *       "service": [
 *          {
 *           "id": 7,
 *           "titulo": "asas",
 *           "descricao": "asa",
 *           "valor": "12.00",
 *           "disponibilidade": true,
 *           "user": {
 *               "id": 1,
 *               "nome": "Sergio Moro",
 *               "mail": "sergiomoro@hotmail.com",
 *               "telefone": 123456789
 *           },
 *          "categorias": {
 *               "id": 1,
 *               "tipo": "Encanador",
 *               "descricao": "profissional responsavel por instalar canos e fazer manutençao de esgoto"
 *           }
 *       }
 *   ]
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
router.get('/service/filter/disponibilidade', apiKey, asyncHandler(filterServiceController.disponibilidade))
module.exports = router