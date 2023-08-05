class UserController {
    async registration(req, res) {
    }

    async auth(req, res) {
    }
    async login(req, res) {
        res.json({ message: 'Login success!' });

    }
}

module.exports = new UserController();