const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const fs = require('fs');
const path = require("path");

const { User, Basket } = require("../models/models");

const ApiError = require("../error/ApiError");

require('dotenv').config();

const generateJwtTokens = (id, email, role) => {
    const access_token = jsonwebtoken.sign({ id, email, role }, process.env.ACCESS_SECRET_KEY, {
        expiresIn: '15m',
    });
    const refresh_token = jsonwebtoken.sign({ id, email, role }, process.env.REFRESH_SECRET_KEY, {
        expiresIn: '7d',
    });
    return { access_token, refresh_token };
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
            const newUser = await User.create({ email, role, password: hashPassword });
            const basket = await Basket.create({ userId: newUser.id });

            const jwt = generateJwtTokens(newUser.id, newUser.email, newUser.role);
            return res.json({ jwt });
        } catch (error) {
            console.log(error);
        }
    }

    async refresh(req, res, next) {
        const {refresh_token} = req.body;

        if (!refresh_token) {
            next(ApiError.unauthorizedRequest('Refresh token is missing!')); 
        }
        try {
            const decodedToken = jsonwebtoken.verify(refresh_token, process.env.REFRESH_SECRET_KEY);
            const user = await User.findOne({where: {id: decodedToken.id}});
            if (!user) {
                next(ApiError.unauthorizedRequest('User not found!'));
            }
            const access_token = jsonwebtoken.sign({id: user.id, email: user.email, role: user.role}, process.env.ACCESS_SECRET_KEY, {
                expiresIn: '15m',
            });
            res.json({access_token});
        } catch (e) {
            next(ApiError.unauthorizedRequest('User not found!'));
        }
    }

    async auth(req, res, next) {
        try {
            const token = generateJwtTokens(req.id, req.email, req.role);
            const access_token = token.access_token;
            if (!access_token) {
                throw new Error('No access token available!')
            }
            return res.json({ access_token });
        } catch (e) {
           return next(e);
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