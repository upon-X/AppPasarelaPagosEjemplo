const express = require('express')
const cors = require('cors')
const Mercado_Pago = require('./routes/Mercado_Pago_Route')
const server = express()

// Proxy - Midleware
server.use(cors())
server.use(express.json())
server.use('/Mercado_Pago', Mercado_Pago)

module.exports = server;