const { Airport } = require('../models/index');
const { where } = require('sequelize');
class AirportRepository {
    async createAirport({name,cityId}) {
        try {
            const airport = await Airport.create({
                name,
                cityId
            })
            return airport;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw {error};
        }
    }
    async updateAirport(airportId, name) {
        try {
            const airport = await Airport.findByPk(airportId);
            airport.name = name;
            await airport.save()
            return airport;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw {error};
        }
    }
    async destroyAirport(cityId) {
        try {
            await Airport.destroy({
                where:{
                    id: cityId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw {error};
        }
    }
    async getAirport(airportId) {
        try {
            const airport = await Airport.findByPk(airportId)
            return airport;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw {error};
        }
    }
    async getAllAirports() {
        try {
            const airport = await Airport.findAll()
            return airport;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw {error};
        }
    }
}

module.exports = AirportRepository