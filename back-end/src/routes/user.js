const {Router} = require('express')
const asyncHandler = require("express-async-handler")
const apiKey = require('../routes/middleware/apiKey')
const userController = require('../controller/userController')
const router = Router()  

/**
 * @api {get} /users 
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiVersion 1.0.0
 * @apiName listagem de registro da tabela usuarios
 * @apiGroup Usuario
 * @apiDescription Essa API lista registros da tabela de usuario
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "statusCode": 200,
 *        "message": "Ok",
 *        "totalResults": 2,
 *        "users":[{
 *             "id": 1,
 *             "nome": "example",
 *             "mail": "example@hotmail.com",
 *             "telefone": 123456
 *                
 *         },
 *         {
 *             "id": 2,
 *             "nome": "example2",
 *             "mail": "example2@hotmail.com",
 *             "telefone": 149867 
 *            
 *         }]       
 *     }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 404 Not Found
 *    {
 *        "statusCode": 404,
 *        "message": "not found",
 *        "totalResults": 0,
 *        "users":[
 *             {}
 *         ]
 *    }
 *  @apiErrorExample {json} Error-Response:
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
 router.get('/users', apiKey,asyncHandler(userController.index))
/**
 * @api {get} /users/:id
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiVersion 1.0.0 
 * @apiName busca um usuario por seu id da tabela
 * @apiParam {Integer} id id da tabela de usuario 
 * @apiGroup Usuario
 * @apiDescription Essa API lista registros da tabela usuario seu id informado
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "statusCode": 200,
 *        "message": "Ok",
 *        "totalResults": 1,
 *        "users":{
 *            "id": 1,
 *            "nome": "example",
 *            "mail": "example@hotmail.com",
 *        }       
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 404 Not Found
 *    {
 *        "statusCode": 404,
 *        "message": "not found",
 *        "totalResults": 0,
 *        "users":{
 *           
 *        }
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
router.get('/users/:id',apiKey, asyncHandler(userController.show))

/**
 * @api {put} /users/:id
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiVersion 1.0.0
 * @apiname Atualizar um usuario
 * @apiParam {Integer} id id do usuario 
 * @apiParam {String} nome Nome do usuario
 * @apiParam {String} mail E-mail do usuario
 * @apiParam {String} senha senha do usuario
 * @apiParam {Integer} telefone telefone do usuario
 * @apiGroup Usuario
 * @apiDescription Essa API atualiza um registro na tabela usuario
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 Ok
 *    {
 *        "statusCode": 200,
 *        "message": "Ok",
 *        "location": "https://example/users/1"      
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 404 Not Found
 *    {
 *        "statusCode": 404,
 *        "message": "not found",
 *        "totalResult": 0  
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "statusCode": 400,
 *        "message": "bad request",
 *        "totalErrors": 4,
 *            "errors": [{
 *                 "field": "nome",
 *                 "message": "Campo Vazio, Por Favor Preencha o Campo Nome"
 *             },
 *                 "field": "mail",
 *                 "message": "Campo Vazio, Por Favor Preencha o Campo E-Mail"
 *             },
 *             {
 *                 "field": "mail",
 *                 "message": "Campo Invalido,Por Favor Digite um E-mail Valido"
 *             }
 *          ]
 *     }
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
router.put('/users/:id',apiKey, asyncHandler(userController.update))


module.exports = router