const {Router} = require('express')
const asyncHandler = require("express-async-handler")
const apiKey = require('../routes/middleware/apiKey')
const avaliacaoController = require('../controller/avaliacaoController')
const router = Router()  

/**
 * @api {get} /avaliacoes
 * @apiGroup Avaliações
 * @apiVersion 1.0.0
 * @apiDescription essa API listapidoc -i ./routes -o public/apidoca registros da tabela de avaliaçoes
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiSuccessExample {json} Success-Reponse:
 *    HTTP/1.1 200 Ok{
 *       "statusCode": 200,
 *       "message": "Ok",
 *       "totalResults": 1,
 *       "avaliacao": [
 *          {
 *           "id": 3,
 *           "nota": 10,
 *           "feedback": "Muito bom",
 *           "recomendacao": true,
 *           "services_id": 4,
 *           "services": {
 *               "id": 4,
 *               "titulo": "asa",
 *               "descricao": "asa",
 *               "valor": "111.00",
 *               "disponibilidade": true,
 *               "categorias_id": 1,
 *               "user_id": 1
 *           }
 *       }
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
 *  }
 */
router.get('/avaliacoes', apiKey, asyncHandler(avaliacaoController.index))
/**
 * @api {get} /avaliacoes/:id
 * @apiGroup Avaliações
 * @apiVersion 1.0.0
 * @apiDescription essa API busca um registro da tabela avaliacao
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiParam {Integer} id chave primaria do serviço
 * @apiSuccessExample {json} Success-Reponse:
 *    HTTP/1.1 200 Ok{
 *       "statusCode": 200,
 *       "message": "ok",
 *       "totalResults": 1,
 *       "avaliacao": {
 *          "id": 3,
 *          "nota": 10,
 *          "feedback": "Muito bom",
 *          "recomendacao": true,
 *          "services_id": 4,
 *       "services": {
 *           "id": 4,
 *           "titulo": "asa",
 *           "descricao": "asa",
 *           "valor": "111.00",
 *           "disponibilidade": true,
 *           "categorias_id": 1,
 *           "user_id": 1
 *       }
 *    }
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
router.get('/avaliacoes/:id', apiKey,  asyncHandler(avaliacaoController.show))
/**
 * @api {post} /avaliacoes
 * @apiGroup Avaliações
 * @apiVersion 1.0.0
 * @apiDescription essa api salva um registro na tabela de avaliações
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiParam {Integer} nota esse campo é a nota do serviço
 * @apiParam {String} feedback comentario sobre o serviço
 * @apiParam {Boolean} recomendacao recomedaria ou nao true ou false
 * @apiParam {Integer} services_id chave primearia da tabela de serviços 
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 201 Created{
 *       "statusCode": 201,
 *       "message": "Created",
 *       "avaliacao": {
 *          "id": 4,
 *          "nota": 8,
 *          "feedback": "Bom",
 *          "recomendacao": true,
 *          "services_id": 4
 *        },
 *          "location": "http://localhost:3333/avaliacoes/4"
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

router.post('/avaliacoes', apiKey,  asyncHandler(avaliacaoController.create))
/**
 * @api {put} /avaliacoes/:id
 * @apiGroup Avaliações
 * @apiVersion 1.0.0
 * @apiDescription essa api atualiza um registro na tabela de avaliações
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiParam {Integer} nota esse campo é a nota do serviço
 * @apiParam {Integer} id chave primaria da tabela avaliacao
 * @apiParam {String} feedback comentario sobre o serviço
 * @apiParam {Boolean} recomendacao recomedaria ou nao true ou false
 * @apiParam {Integer} services_id chave primearia da tabela de serviços 
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 201 Ok{
 *       "statusCode": 200,
 *       "message": "ok",
 *       "location": "http://localhost:3333/avaliacoes/3"
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
router.put('/avaliacoes/:id', apiKey,  asyncHandler(avaliacaoController.update))
/**
 * @api {delete} /avaliacoes/:id
 * @apiGroup Avaliações
 * @apiVersion 1.0.0
 * @apiDescription essa API deleta um registro da tabela avaliaçoes
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiParam {Integer} id chave primaria da tabela avaliacoes
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
router.delete('/avaliacoes/:id', apiKey,  asyncHandler(avaliacaoController.destroy))

module.exports = router
