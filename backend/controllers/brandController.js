const ApiError = require('../error/ApiError');
const { Brand } = require('../models/models');

class BrandController {
    async getAll(req, res) {
        const brands = await Brand.findAll();
        return res.json(brands);
    }

    async create(req, res) {
        const { name } = req.body;
        const brand = await Brand.create({ name });
        return res.json(brand);
    }

    async update(req, res, next) {
        try {
            const { name } = req.body;
            const { id } = req.params;
            const brand = await Brand.update({ name }, { where: { id } });
            return res.json(brand);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const brand = await Brand.destroy({ where: { id } });
            return res.json(brand);
        }
        catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }
}

module.exports = new BrandController();