const {Router} = require('express')
const asyncHandler = require("express-async-handler")
const apiKey = require('../routes/middleware/apiKey')
const categoriaController = require('../controller/categoriaController')
const router = Router()  

/**
 * @api {get} /categorias
 * @apiGroup Categorias
 * @apiVersion 1.0.0
 * @apiDescription essa API lista registros da tabela de categorias
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiSuccessExample {json} Success-Reponse:
 *    HTTP/1.1 200 Ok{
 *       "statusCode": 200,
 *       "message": "Ok",
 *       "totalResults": 2,
 *       "categories": [
 *           {
 *              "id": 3,
 *              "tipo": "Encanador",
 *              "descricao": "porfisional que cria e mantem rede de esgoto",
 *             
 *          },
 *          {
 *              "id": 4,
 *              "tipo": "Eletricista",
 *              "descricao": "profisional responsavel pela redes eletricas",
 *         
 *          },
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
router.get('/categorias', apiKey, asyncHandler(categoriaController.index))
/**
 * @api {get} /categorias/:id
 * @apiGroup Categorias
 * @apiVersion 1.0.0
 * @apiDescription essa API busca um registro da tabela categorias
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiParam {Integer} id chave primaria da tabela categorias
 * @apiSuccessExample {json} Success-Reponse:
 *    HTTP/1.1 200 Ok{
 *       "statusCode": 200,
 *       "message": "Ok",
 *       "totalResults": 1,
 *       "categories":{
 *          "id": 3,
 *          "tipo": "Encanador",
 *          "descricao": "porfisional que cria e mantem rede de esgoto",
 *       },
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
router.get('/categorias/:id', apiKey,  asyncHandler(categoriaController.show))

/**
 * @api {post} /categorias
 * @apiGroup Categorias
 * @apiVersion 1.0.0
 * @apiDescription essa api salva um registro na tabela de categorias de serviço
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiParam {String} tipo esse campo é a função do serviço
 * @apiParam {String} descricao descreve o tipo de função da categoria
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 201 Created{
 *      "statusCode": 201,
 *      "message": "Created",
 *      "categorias":{
 *         "id": 4,
 *         "tipo": "Encanador",
 *         "descricao": "Encanador e o profissional que instala e mantem a rede de esgoto"  
 *      }    
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 400 Bad Request
 *    {
 *       "statusCode": 400,
 *       "message": "Bad Request",
 *       "totalErros": 2,
 *       "errors":[
 *          {
 *             "field": "tipo",
 *             "message": "Campo Vazio, Por favor preencha o campo tipo"
 *          }
 *          {
 *             "field": "descricao",
 *             "message": "Campo Vazio, Por favor preencha o campo descricao"
 *          }
 *       ]       
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
router.post('/categorias', apiKey,  asyncHandler(categoriaController.create))
/**
 * @api {put} /categorias/:id
 * @apiGroup Categorias
 * @apiVersion 1.0.0
 * @apiDescription essa API atualiza um registro na tabela de categorias
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiParam {Integer} id chave primaria da tabela categorias
 * @apiParam {String} tipo esse campo é a função do serviço
 * @apiParam {String} descricao descreve o tipo de função
 * @apiSuccessExample {json} Success-Reponse:
 *    HTTP/1.1 200 Ok{
 *       "statusCode": 200,
 *       "message": "Ok",
 *       "location": "http://localhost:3333/categorias/3"
 *    }
 *   @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 400 Bad Request
 *    {
 *       "statusCode": 400,
 *       "message": "Bad Request",
 *       "totalErros": 2,
 *       "errors":[
 *          {
 *             "field": "tipo",
 *             "message": "Campo Vazio, Por favor preencha o campo tipo"
 *          }
 *          {
 *             "field": "descricao",
 *             "message": "Campo Vazio, Por favor preencha o campo descricao"
 *          }
 *       ]       
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

router.put('/categorias/:id', apiKey,  asyncHandler(categoriaController.update))
/**
 * @api {delete} /categorias/:id
 * @apiGroup Categorias
 * @apiVersion 1.0.0
 * @apiDescription essa API deleta um registro da tabela categorias
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiParam {Integer} id chave primaria da tabela categorias
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
router.delete('/categorias/:id', apiKey,  asyncHandler(categoriaController.destroy))

module.exports = router