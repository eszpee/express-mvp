let validator = require('validator');
let models = require('../models');

const validateCreateUserFields = function(errors, req) {
    if (!validator.isEmail(req.body.email)) {
        errors["email"] = "Please use a valid email.";
    }
    if (!validator.isAscii(req.body.password)) {
        errors["password"] = "Invalid characters in password.";
    }
    if (!validator.isLength(req.body.password, {min: 8, max: 250})) {
        errors["password"] = "Passwords should be at least 8 charactes long.";
    }
    // errors was a parameter that we modify in place, so no need to return anything!
}

exports.validateUser = function(errors, req) {
    return new Promise(function(resolve, reject) {
        validateCreateUserFields(errors, req);
        return models.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(u => {
            if (u !== null) {
                errors["email"] = "Email is already in use. Please login or reset your password.";
            }
            resolve(errors);
        })
            
    })
}