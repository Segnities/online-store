const jwt = require('jsonwebtoken');

function checkRoleMiddleware(role) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
            next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1];

            if (!token) {
                console.log('Unauthorized');
                return res.status(401).json({ message: 'Unauthorized' });
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY);

            if (decoded.role !== role) {
                return res.status(403).json({ message: 'Forbidden' });
            }
            req.user = decoded;
            next();
        } catch (error) {
            res.status(401).json({ message: 'Unauthorized' });
        }
    }
}

module.exports = checkRoleMiddleware;