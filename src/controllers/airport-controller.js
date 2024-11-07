const { AirportService } = require('../services/index')
const airportService = new AirportService()

const createAirport = async (req, res) => {
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(201).json({
            data : airport,
            sucess : true,
            message : "Successfully created an airport",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to create an airport",
            err : error
        })
    }
}
const deleteAirport = async (req, res) => {
    try {
        const airport = await airportService.destroyAirport(req.params.id);
        return res.status(201).json({
            data : airport,
            sucess : true,
            message : "Successfully deleted the airport",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to delete the airport",
            err : error
        })
    }
}
module.exports = { createAirport, deleteAirport }