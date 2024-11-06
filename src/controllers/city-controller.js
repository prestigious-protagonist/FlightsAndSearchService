const CityService = require('../services/city-service');

const cityService = new CityService();

const create = async (req,res) => {
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
const destroy = async (req,res) => {
    try {
        // /city/:id
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : city,
            sucess : true,
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
            data : city,
            sucess : true,
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
        const city = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : city,
            sucess : true,
            message : "Successfully fetched the city",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to fetch the city",
            err : error
        })
    }
}

module.exports ={ create, destroy, update, get}