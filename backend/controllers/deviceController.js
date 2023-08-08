const uuid = require('uuid');
const path = require('path');
const fs = require('fs');
const { Device } = require('../models/models');

const ApiError = require('../error/ApiError');

class DeviceRouter {
    async getAll() {

    }
    async getOne() { }

    async create(req, res, next) {
        try {
            const { name, price, brandId, typeId, info } = req.body;
            const { img } = req.files;

            if (!img) {
                return next(ApiError.badRequest("Image is required"));
            }
            let fileName = uuid.v4() + ".jpg";

            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            const device = await Device.create({
                name, price, brandId, typeId,
                img: fileName
            });

            return res.json(device);
        } catch (error) {
            return next(ApiError.badRequest(error.message));
        }

    }
}


module.exports = new DeviceRouter();
