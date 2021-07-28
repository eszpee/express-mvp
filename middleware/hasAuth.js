let createError = require('http-errors');

exports.isLoggedIn = function(req, res, next) {
    if (req.user) {
        next();
    } else {
        next(createError(404, "Page does not exist.")); //in case there is any parameters to next() it will be treated as error and skip other functions
    }
}

exports.hasAuth = function(req, res, next) {
    if (req.user && req.user.is_admin) {
        next();
    } else {
        next(createError(404, "Page does not exist.")); 
    }
}