const {Router} = require('express')
const asyncHandler = require("express-async-handler")
const authController = require('../controller/authController')
const apiKey = require('../routes/middleware/apiKey')
const router = Router() 


/**
 * @api {post} /register
 * @apiVersion 1.0.0 
 * @apiName Registra um usuario
 * @apiGroup Auth
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiParam {String} nome nome do usuario
 * @apiParam {String} mail e-mail do usuario
 * @apiParam {String} senha senha do usuario
 * @apiParam {Integer} telefone telefone do usuario sem dd
 * @apiDescription Essa API salva um usuario
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 201 Created
 *    {
 *        "statusCode": 201,
 *        "message": "Created",
 *        "users": {
 *            "id": 1,
 *            "nome": "example",
 *            "mail": "example@hotmail.com",
 *            "senha": "$a6541/asa664"  
 *            "telefone": 169894,
 *         },
 *         "location": "https://example.com/users/1"  
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "statusCode": 400,
 *        "message": "bad request",
 *        "totalErrors": 2,
 *            "errors": [
 *                 {
 *                     "field": "mail",
 *                     "message": "Campo Vazio, Por Favor Preencha o Campo E-Mail"
 *                 },
 *                 {
 *                     "field": "mail",
 *                     "message": "Campo Invalido,Por Favor Digite um E-mail Valido"
 *                 }
 *             ]
 *     }
 *  @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *        "message": "Internal Server Error",
 *        "statusCode": 500
 *    }
 * 
*/
router.post('/register', apiKey, asyncHandler(authController.register))
/**
 * @api {post} /confirm
 * @apiVersion 1.0.0 
 * @apiHeader {String} x-api-key 75e8efc1-3858-4778-bafb-1a744b1da3b7
 * @apiName autentica um usuario
 * @apiGroup Auth
 * @apiParam {String} mail e-mail do usuario
 * @apiParam {String} senha senha do usuario
 * @apiDescription Essa API autentica o usuario
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 Ok 
 * {
 *   "statusCode": 200,
 *   "message": "Ok",
 *   "auth": true,
 *   "mail": "example@hotmail.com"
 * }
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 401 Unautorized
 * {
 *    "statusCode": 401,
 *    "message": "Unautorized",
 *    "auth": false
 * }
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 500 Internal Server Error
 * {
 *    "message": "Internal Server Error",
 *    "statusCode": 500
 * }
*/
router.post('/confirm', apiKey,asyncHandler(authController.confirm))


module.exports = router