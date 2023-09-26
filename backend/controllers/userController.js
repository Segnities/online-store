const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

const { User, Basket } = require("../models/models");

const ApiError = require("../error/ApiError");

require('dotenv').config();

const generateJwtTokens = (id, email, role) => {
    const acess_token = jsonwebtoken.sign({ id, email, role }, process.env.ACCESS_SECRET_KEY, {
        expiresIn: '15m',
    });
    const refresh_token = jsonwebtoken.sign({ id, email, role }, process.env.REFRESH_SECRET_KEY, {
        expiresIn: '7d',
    });
    return { acess_token, refresh_token };
}

class UserController {
    async registration(req, res, next) {
        try {
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

            const jwt = generateJwtTokens(newUser.id, newUser.email, newUser.role);
            return res.json({ jwt });
        } catch (error) {
            console.log(error);
        }
    }

    async auth(req, res, next) {
        try {
            const jwt = generateJwtTokens(req.user.id, req.user.email, req.user.role);
            return res.json({ jwt });
        } catch (e) {
            console.log(e);
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email } });
            if (!user) {
                return next(ApiError.internal('User not found'));
            }
            const comparePassword = bcrypt.compareSync(password, user.password);

            if (!comparePassword) {
                return next(ApiError.internal('Incorrect password'));
            }
            const jwt = generateJwtTokens(user.id, user.email, user.role);

            return res.json({ jwt });
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new UserController();