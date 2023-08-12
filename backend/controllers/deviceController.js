const uuid = require('uuid');
const path = require('path');
const { Device, DeviceInfo } = require('../models/models');

const ApiError = require('../error/ApiError');


class DeviceRouter {
    async getAll(req, res) {
        let { brandId, typeId, limit, page, info } = req.query;
        page = page || 1;
        limit = limit || 10;

        let offset = (page * limit) - limit;

        if (info) {
            info = JSON.parse(info);
            info.forEach(i => {
                DeviceInfo.create({
                    title: i.title,
                    description: i.description,
                    deviceId: i.id
                });
            })
        }

        let devices;

        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({ limit, offset });
        } else if (!brandId) {
            devices = await Device.findAndCountAll({ where: { typeId }, limit, offset });
        } else if (!typeId) {
            devices = await Device.findAndCountAll({ where: { brandId }, limit, offset });
        } else {
            devices = await Device.findAndCountAll({ where: { brandId, typeId }, offset, limit });
        }
        return res.json(devices);
    }

    async getOne(req, res) {
        const { id } = req.params;

        const device = await Device.findOne({
            where: { id }, include: {
                model: DeviceInfo,
                as: 'info'
            }
        });
        return res.json(device);
    }

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
    async update(req, res, next) {
        try {
            const { id } = req.params;
            const { name, price, brandId, typeId } = req.body;

            const files = req.files;

            if (!files?.img) {
                const device = await Device.update({ name, price, brandId, typeId }, { where: { id } });
                return res.json(device);
            }
            const fileName = uuid.v4() + ".jpg";
            files?.img.mv(path.resolve(__dirname, '..', 'static', fileName));

            const device = await Device.update({ name, price, brandId, typeId, img: fileName }, { where: { id } });

            res.json({ message: "Device updated successfully!", device });
        } catch (err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const device = await Device.destroy({ where: { id } });
            return res.json({ message: "Device deleted successfully!", device });
        }
        catch (error) {
            next(ApiError.badRequest(error.message));
        }

    }
}


module.exports = new DeviceRouter();
