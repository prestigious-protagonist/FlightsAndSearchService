const { Op } = require("sequelize")
const { City , Airport} = require('../models/index')

class CityRepository{
    constructor() {
        if(CityRepository.instance) {
            return CityRepository.instance;
        }
    }
    async createCity({name}) {
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw {error};
        }
    }
    async createCities(data) {
        try {
            
            const cities = await City.bulkCreate(data);
            return cities;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw {error};
        }
    }
    
    async deleteCity(cityId) {
        try {
            await City.destroy({
                where:{
                    id : cityId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw {error};
        }
    }
    async updateCity(cityId,data) {
        try {
            // const city = await City.update(data,{
            //     where:{
            //         id: cityId
            //     }
            // }) -> returns [1] 

            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw {error};
        }
    }
    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw {error};
        }

    }
    async getAllCities(filter) {
        try {
            if(filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith] : filter.name
                        }
                    }
                })
                return cities;
            }
            const cities =await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw {error};
        }
    }
    async getAirportsByCityId(cityId) {
        try {
            const airports = await Airport.findAll({
                where: { cityId, }
              });
              
            return airports;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            console.log(error)
            throw {error};
        }
    }
}

module.exports = CityRepository;