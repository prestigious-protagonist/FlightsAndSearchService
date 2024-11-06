const express = require('express')
const {PORT} = require('./config/serverConfig')
const bodyParser = require('body-parser')
const Apiroutes = require('./routes/index')
const { City, Airport } = require('./models/index')
const db = require('./models/index')
const sequelize = require('sequelize')
const setupAndStartServer = async () => {
    
    const app = express()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended : true}))

    app.use('/api',Apiroutes )

    app.listen( PORT,async()=> {
        console.log(`On port ${PORT}`)
        const city = await City.findOne({
            where: {
                id: 9
            }
        })
        const airports = await city.getAirports()
        console.log(city, airports)
    })
}       
setupAndStartServer()