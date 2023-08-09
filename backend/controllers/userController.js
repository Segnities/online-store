const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

const { User, Basket } = require("../models/models");

const ApiError = require("../error/ApiError");

require('dotenv').config();

const generateJwtToken = (id, email, role) => {
    return jsonwebtoken.sign({ id, email, role }, process.env.SECRET_KEY, {
        expiresIn: '24h',
    });
}

class UserController {
    static #generateJwt(id, email, role) {

    }

    async registration(req, res, next) {
        const { email, password, role } = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Incorrect email or password'));
        }
        const user = await User.findOne({ where: { email } });

        if (user) {
            return next(ApiError.badRequest('User already exists'));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const newUser = await User.create({ email, role, password: hashPassword, role });
        const basket = await Basket.create({ userId: newUser.id });

        const jwt = generateJwtToken(newUser.id, newUser.email, newUser.role);
        return res.json({ jwt });
    }

    async auth(req, res, next) {
        const { id } = req.query;

        if (!id) {
            return next(ApiError.badRequest('Id is not specified'));
        }
        res.json({ message: 'Auth success!' });
    }
    async login(req, res) {

    }
}

module.exports = new UserController();