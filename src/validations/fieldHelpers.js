const Joi = require('joi');

// required
const requiredMessage = (fieldName) => `${fieldName} is required`;

// common messages
const stringMessages = (fieldName) => ({
    'string.base': `${fieldName} must be a text value`,
    'string.empty': `${fieldName} cannot be empty`,
});

// Helper for required string field
const requiredString = (fieldName) => Joi.string().required().messages({
    ...stringMessages(fieldName),
    'any.required': requiredMessage(fieldName),
});

const nameField = () => Joi.string().min(3).max(30).required().messages({
    ...stringMessages('Name'),
    'string.min': 'Name must be at least 3 characters long',
    'string.max': 'Name must not exceed 30 characters',
    'any.required': requiredMessage("Name"),
});

const emailField = () => Joi.string().email().required().messages({
    'string.base': 'Email must be a text value',
    'string.empty': 'Email cannot be empty',
    'string.email': 'Please enter a valid email',
    'any.required': requiredMessage("Email"),
});

const passwordField = (fieldName) => Joi.string()
    .min(7)
    .max(20)
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{7,}$"))
    .required()
    .messages({
        ...stringMessages(fieldName),
        'any.required': requiredMessage(fieldName),
        'string.min': `${fieldName} must be 7-20 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character`,
        'string.max': `${fieldName} length must not exceed 20 characters`,
        'string.pattern.base': `${fieldName} must be 7-20 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character`,
    });

    const confirmPasswordField = (fieldName, referenceField) => Joi.string()
    .valid(Joi.ref(referenceField))  // Dynamically use the reference (password or new_password)
    .required()
    .messages({
        'any.only': `${fieldName} must match the ${referenceField}`,
        'any.required': `${fieldName} is required.`,
    });


module.exports = {
    requiredString,
    nameField,
    emailField,
    passwordField,
    confirmPasswordField,
};
