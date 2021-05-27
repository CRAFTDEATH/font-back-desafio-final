require("dotenv").config();
module.exports = async (req, res, next)=> {
    const apiKey = req.header('x-api-key') || null
    if (apiKey == null) {
        res.json({
            statusCode: 401,
            message: 'Unautorized',
            auth: false,
        }).status(401)
    } else {
        
        if(apiKey == process.env.API_KEY){
            next()
        }
        else{
            res.json({
                statusCode: 401,
                message: 'Unautorized',
                auth: false,
            }).status(401)
        }
    }
}