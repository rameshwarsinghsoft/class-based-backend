// const loginSchema = {
//     body: Joi.object({
//         email: Joi.string().email().required()
//             .messages({
//                 'string.base': 'Email must be a text value',
//                 'string.empty': 'Email cannot be empty',
//                 'string.email': 'Please enter a valid email',
//                 'any.required': 'Email is required'
//             }),
//         password: Joi.string()
//             .required()
//             .messages({
//                 'string.base': 'Password must be a text value',
//                 'string.empty': 'Password cannot be empty',
//                 'any.required': 'Password is required'
//             }),
//     })
// }
const Joi = require('joi');
const { requiredString, emailField, passwordField, confirmPasswordField } = require('./fieldHelpers');

const loginSchema = {
    body: Joi.object({
        email: emailField(),
        password: requiredString('Password'),
    }),
};

const setPasswordSchema = {
    query: Joi.object({
        token: requiredString('Token'),
        email: emailField(),
    }),
    body: Joi.object({
        password: passwordField('Password'),
        confirm_password: confirmPasswordField('Confirm password', 'password'),  // Confirm matches 'password'
    }),
};

const changePasswordSchema = {
    body: Joi.object({
        current_password: requiredString('Current password'),
        new_password: passwordField('New password'),
        confirm_password: confirmPasswordField('Confirm password', 'new_password'),  // Confirm matches 'new_password'
    }),
};

const forgetPasswordSchema = {
    body: Joi.object({
        email: emailField(),
    }),
};

module.exports = {
    loginSchema,
    setPasswordSchema,
    changePasswordSchema,
    forgetPasswordSchema,
};