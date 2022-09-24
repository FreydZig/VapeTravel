const {Shop} = require('../models/models');
const ApiError = require('../error/ApiError');

class ShopController{
    async create(req, res, next){
        try {
            const {location, schedule} = req.body;

            const shop = await Shop.create({location, schedule});

            return res.json(shop);
        }
        catch (e){
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res){
        const shops = await Shop.findAll();

        return res.json(shops);
    }
}

module.exports = new ShopController();