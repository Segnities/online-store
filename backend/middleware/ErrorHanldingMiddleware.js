const ApiErrror = require('../error/ApiError');

function errorHandlingMiddleware(err, req, res, next) {
    if (err instanceof ApiErrror) {
        return res.status(err.status).json({message: err.message});
    }
    return res.status(500).json({message: 'Unexpected error'});
}

module.exports =  errorHandlingMiddleware;
