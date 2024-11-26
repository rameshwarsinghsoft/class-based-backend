const Joi = require('joi');
const { requiredString, requiredNumber, emailFieldOptional, emailField, nameField, mobileNumberField } = require('./fieldHelpers');

const registerSchema = {
    body: Joi.object({
        name: nameField(),
        email: emailField(),
        mobile_number: mobileNumberField(),
        role: requiredNumber("Role")
    }).unknown(true),
};

const getUserSchema = {
    params: Joi.object({
        email: emailFieldOptional(),
    }),
};

const updateUserSchema = {
    params: Joi.object({
        email: emailField(),
    }),
    body: Joi.object({
        name: nameField(),
        email: emailField(),
        mobile_number: mobileNumberField(),
    }),
};

const deleteUserSchema = {
    params: Joi.object({
        email: emailField(),
    }),
};

module.exports = {
    registerSchema,
    getUserSchema,
    updateUserSchema,
    deleteUserSchema
};