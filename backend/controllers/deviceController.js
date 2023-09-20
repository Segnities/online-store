const {v4: uuid} = require('uuid');
const path = require('path');
const { Device, DeviceInfo } = require('../models/models');

const ApiError = require('../error/ApiError');


class DeviceRouter {
    async getAll(req, res) {
        let { brandId, typeId, limit, page } = req.query;
        page = page || 1;
        limit = limit || 10;

        let offset = (page * limit) - limit;

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
            const req_files = req.files;
            const img = req_files?.img;

            let fileName = '';

            if (img) {
                fileName = uuid() + '.jpg';
                img.mv(path.resolve(__dirname, '..', 'static', fileName));
            }

            const device = await Device.create({
                name, price, brandId: parseInt(brandId), typeId: parseInt(typeId),
                img: fileName
            });

            if (info) {
                const dInfo  = JSON.parse(info);
                for (const inf of dInfo) {
                    await  DeviceInfo.create({
                        title: inf.title,
                        description: inf.description,
                        deviceId: device.id
                    });
                }
                
            }

         
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
