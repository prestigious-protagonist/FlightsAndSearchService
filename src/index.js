const express = require('express')
const {PORT} = require('./config/serverConfig')
const bodyParser = require('body-parser')
const Apiroutes = require('./routes/index')

const setupAndStartServer = async () => {
    
    const app = express()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended : true}))

    app.use('/api',Apiroutes )

    app.listen( PORT,async()=> {
        console.log(`On port ${PORT}`)
        
    })
}       
setupAndStartServer()