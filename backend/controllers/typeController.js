const { Type } = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController {
    async getAll(req, res) {
        
    }

    async create(req, res) {
        const { name } = req.body;
        const type = await Type.create({name});
        return res.json(type);

    }
}

module.exports = new TypeController();