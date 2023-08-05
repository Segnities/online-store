class UserController {
    async registration(req, res) {
    }

    async auth(req, res) {
        const { id } = req.body;
        
        if (!id) {
            res.status(400).json({ message: 'Id is not found' });
        }

        res.json({ message: 'Auth success!' });

    }
    async login(req, res) {

    }
}

module.exports = new UserController();