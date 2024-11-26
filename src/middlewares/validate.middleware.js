const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');
const { ApiResponse } = require('../utils/Response');

const validateRequest = (schema) => (req, res, next) => {
    const validationErrors = [];
    // Iterate through each source defined in the schema (query, body, params, etc.)
    Object.entries(schema).forEach(([source, rules]) => {
        // console.log("source : ", source)
        // console.log("rules : ", rules)
        // console.log("(req[source] : ", (req[source]))

        const { error } = rules.validate(req[source], { abortEarly: false });
        if (error) {
            console.log("error : ", error)
            // with source:- ${source}
            // validationErrors.push(...error.details.map((err) => `${source}: ${err.message}`));
            validationErrors.push(...error.details.map((err) => `${err.message}`));
        }
    });

    if (validationErrors.length > 0) return ApiResponse(res, StatusCodes.BAD_REQUEST, validationErrors[0]);

    next();
};

module.exports = validateRequest;