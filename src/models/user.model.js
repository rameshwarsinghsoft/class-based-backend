const mongoose = require('mongoose');
const { Schema } = mongoose;

// Address Schema
const addressSchema = new Schema({
    city_id: { type: Number, required: true, trim: true },
    city_name: { type: String, required: true, trim: true },
    state_id: { type: Number, required: true, trim: true },
    state_name: { type: String, required: true, trim: true },
    country_id: { type: Number, required: true, trim: true },
    country_name: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
});

// Identification Schema
const identificationSchema = new Schema({
    aadhaar_number: {
        type: Number,
        required: true,
        minlength: 12,
        maxlength: 12
    },
    aadhaar_card_file: { type: String, required: true, trim: true },
    pan_number: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 10
    },
    pan_card_file: { type: String, required: true, trim: true },
});

// User Schema
const userSchema = new Schema({
    profile_image: { type: String, required: false },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    mobile_number: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        enum: [1, 2],
        default: 2
    },
    email_verify: {
        type: Boolean,
        default: false
    },
    is_active: {
        type: Boolean,
        default: false
    },
    is_delete: {
        type: Boolean,
        default: false
    },
    address_details: addressSchema,
    identification: identificationSchema,
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;