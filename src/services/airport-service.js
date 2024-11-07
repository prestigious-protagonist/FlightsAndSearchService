const { AirportRepository } = require('../repository/index')
class AirportService {
    constructor() {
        this.airportRepository = new AirportRepository();
    }
    async createAirport(data) {
        try {
            const response = await this.airportRepository.createAirport(data); 
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    async createAirports(data) {
        try {
            const response = await this.airportRepository.createAirports(data); 
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    async updateAirport({airportId,name}) {
        try {
            const airport = await this.airportRepository.updateAirport(airportId,name); 
            return airport;
        } catch (error) {               
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    async destroyAirport(cityId) {
        try {
            const response = await this.airportRepository.destroyAirport(cityId); 
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }                       
    }
    async getAirport(airportId) {
        try {
            const airport = await this.airportRepository.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    async getAllAirports() {
        try {
            const airports = await this.airportRepository.getAllAirports();
            return airports;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    
}
module.exports = AirportService;