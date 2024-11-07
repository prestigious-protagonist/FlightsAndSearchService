const CityService = require('../services/city-service');

const cityService = new CityService();

const createCity = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            sucess : true,
            message : "Successfully created a city",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to create a city",
            err : error
        })
    }
}
const createCities = async (req, res) => {
    try {
        const cities = await cityService.createCities(req.body);
        return res.status(201).json({
            data : cities,
            sucess : true,
            message : "Successfully created cities",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to create cities",
            err : error
        })
    }
}
    

const destroy = async (req,res) => {
    try {
        // /city/:id
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            success : true,
            message : "Successfully deleted a city",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to delete a city",
            err : error
        })
    }
}
const update = async (req,res) => {
    try {
        // /city/:id + req.body (patch request)
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data : response,    
            success : true,
            message : "Successfully updated the city",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to update the city",
            err : error
        })
    }
}
// /getCity/:id
const get = async (req,res) => {

    try {
        // /city/:id
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : city,
            sucess : true,
            message : "Successfully fetched the city",
            err : {}
        });
    } catch (error) {
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to fetch the city",
            err : error
        })
    }
}
const getAll = async (req,res) => {
    try {
        const city = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data : city,
            sucess : true,
            message : "Successfully fetched the cities",
            err : {}
        });
    } catch (error) {
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to fetch the city",
            err : error
        })
    }
}

module.exports = { createCity, createCities, destroy, update, get, getAll}