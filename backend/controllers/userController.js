const ApiError = require("../error/ApiError");

class UserController {
    async registration(req, res) {
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