const jwt = require('jsonwebtoken');
require('dotenv').config();

function authEncryptMiddleware(req, res, next) {
    if (req.method === 'OPTIONS') {
        next();
    }
    try {
        const token = req.headers["Authorization"]?.split(' ')[1];
        console.log("Token: ",  token);
        if (!token) {
            return res.status(401).json({message: 'Unauthorized'});
        }
        const decoded = jwt.verify(token, process.env.ACCESS_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Authentication error:', error.message);
        return res.status(401).json({message: 'Unauthorized'});
    }
}

module.exports = authEncryptMiddleware;
