const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const errors = require('./routes/error/error500')
const user = require('./routes/user')
const auth = require('./routes/auth')
const categoria = require('./routes/categoria')
const services = require('./routes/services')
const filter = require('./routes/filterService')
const avaliacao = require('./routes/avaliacao')
const app = express()
const port = process.env.PORT || 3333
require("./database/connection")

app.use(cors())
app.use(express.static('src/public'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(auth)
app.use(user)
app.use(categoria)
app.use(services)
app.use(filter)
app.use(avaliacao)

app.use(errors)

app.listen(port);
console.log(port);

