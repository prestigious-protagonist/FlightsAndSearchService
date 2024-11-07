//v1APiRoutes
const express = require('express')              
const CityController = require('../../controllers/city-controller')
const AirportController = require('../../controllers/airport-controller')
const router = express.Router()

router.post('/city',CityController.createCity)
router.post('/cities',CityController.createCities)
router.delete('/city/:id',CityController.destroy)
router.patch('/city/:id',CityController.update)
router.get('/city/:id',CityController.get)
router.get('/city',CityController.getAll)

router.post('/airport',AirportController.createAirport)

router.delete('/airport/:id',AirportController.deleteAirport)
module.exports = router;