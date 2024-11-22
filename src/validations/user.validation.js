const Joi = require('joi');
const { requiredString, emailField, nameField } = require('./fieldHelpers');
const { param } = require('../routes/user.routes');

const registerSchema = {
    body: Joi.object({
        name: nameField(),
        email: emailField(),
    }),
};

const updateUserSchema = {
    params: Joi.object({
        email: emailField(),
    }),
    body: Joi.object({
        name: nameField(),
    }),
};

const deleteUserSchema = {
    params: Joi.object({
        email: emailField(),
    }),
};

module.exports = {
    registerSchema,
    updateUserSchema,
    deleteUserSchema
};
