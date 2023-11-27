const { Router } = require('express')
const Mercado_Pago = Router()
const mercadopago = require('mercadopago')
const dotenv = require('dotenv')
dotenv.config()

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN,
})

Mercado_Pago.post('/', async (req, res) => {
    const producto = req.body
    try {
        const preference = {
            items: [{
                title: producto.nombre,
                unit_price: producto.precio,
                currency_id: 'ARS',
                quantity: producto.cantidad,
            }],
            back_urls: {
                success: 'http://localhost:5173',
                failure: 'http://localhost:5173'
            },
            auto_return: 'approved',
        };
        const response = await mercadopago.preferences.create(preference)
        console.log(response)
        res.status(200).json(response.response.init_point)
    }
    catch (error) {
        console.error(error.message)
        res.status(500).json(error.message)
    }
})

module.exports = Mercado_Pago