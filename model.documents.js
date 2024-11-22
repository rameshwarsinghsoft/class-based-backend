const mongoose = require('mongoose');


// 1. required: Indicates if the field is mandatory.
// 2. unique: Ensures that all values in the field are unique across the collection.
// 3. trim: Removes whitespace from both ends of the string.
// 4. lowercase: Converts the string to lowercase before saving.
// 5. uppercase: Converts the string to uppercase before saving.
// 6. minlength: Specifies the minimum length for the string.
// 7. maxlength: Specifies the maximum length for the string.
// 8. match: Validates the string against a regular expression.
// 9. default: Sets a default value if none is provided.
// 10. validate: Allows for custom validation logic.
// username: {
//     type: String,
//         validate: {
//         validator: function(v) {
//             return /^[a-zA-Z0-9]+$/.test(v); // Only alphanumeric characters
//         },
//         message: props => `${props.value} is not a valid username!`
//     }
// }

// 11. enum: Specifies an array of valid values for a field
// 12. immutable: Makes the field value immutable after the document is created. Once set, it cannot be changed.
// fieldName: { type: String, immutable: true }
// 13. expires: Used with date fields, this specifies a TTL (time-to-live) for documents.
// fieldName: { type: Date, expires: '1d' } // Expire after 1 day
// 14. index: Indicates whether to create an index on this field. Indexes can improve query performance but may slow down write operations.
// fieldName: { type: String, index: true }



const addressSchema = new mongoose.Schema({
    city: { type: String, required: [true, 'City is required'], trim: true },
    district_id: { type: String, required: [true, 'District ID is required'], trim: true },
    district_name: { type: String, required: [true, 'District name is required'], trim: true },
    state_name: { type: String, required: [true, 'State name is required'], trim: true },
    state_id: { type: String, required: [true, 'State ID is required'], trim: true },
    village_id: { type: String, required: [true, 'Village ID is required'], trim: true },
    village_name: { type: String, required: [true, 'Village name is required'], trim: true },
    street_address: { type: String, required: [true, 'Street address is required'], trim: true },
    zip_code: { type: String, required: [true, 'Zip code is required'], trim: true, match: [/^\d{5}(-\d{4})?$/, 'Zip code must be in the format 12345 or 12345-6789'] },
});

const workingAddressSchema = new mongoose.Schema({
    company_name: { type: String, required: [true, 'Company name is required'], trim: true },
    city: { type: String, required: [true, 'City is required'], trim: true },
    district_id: { type: String, required: [true, 'District ID is required'], trim: true },
    district_name: { type: String, required: [true, 'District name is required'], trim: true },
    state_name: { type: String, required: [true, 'State name is required'], trim: true },
    state_id: { type: String, required: [true, 'State ID is required'], trim: true },
    village_id: { type: String, required: [true, 'Village ID is required'], trim: true },
    village_name: { type: String, required: [true, 'Village name is required'], trim: true },
    street_address: { type: String, required: [true, 'Street address is required'], trim: true },
    zip_code: { type: String, required: [true, 'Zip code is required'], trim: true, match: [/^\d{5}(-\d{4})?$/, 'Zip code must be in the format 12345 or 12345-6789'] },
});

const identificationSchema = new mongoose.Schema({
    aadhaar_number: {
        type: String,
        required: [true, 'Aadhaar number is required'],
        trim: true,
        minlength: [12, 'Aadhaar number must be 12 digits'],
        maxlength: [12, 'Aadhaar number cannot exceed 12 digits']
    },
    aadhaar_card_file: { type: String, required: [true, 'Aadhaar card file is required'], trim: true },
    pan_number: { type: String, required: [true, 'PAN number is required'], trim: true, minlength: [10, 'PAN number must be 10 characters'], maxlength: [10, 'PAN number cannot exceed 10 characters'] },
    pan_card_file: { type: String, required: [true, 'PAN card file is required'], trim: true },
});

const userSchema = new mongoose.Schema({
    user_id: { type: String, required: [true, 'User ID is required'], unique: true, trim: true },
    username: { type: String, required: [true, 'Username is required'], unique: true, trim: true },
    email: { type: String, required: [true, 'Email is required'], unique: true, trim: true, lowercase: true, match: [/\S+@\S+\.\S+/, 'Email is invalid'] },
    password: { type: String, required: [true, 'Password is required'], minlength: [6, 'Password must be at least 6 characters long'] },
    passwordToken: { type: String, trim: true },
    mobile_number: { type: String, required: [true, 'Mobile number is required'], match: [/^\d{10}$/, 'Mobile number must be 10 digits'] },
    role: { type: String, required: [true, 'Role is required'], enum: ['user', 'admin', 'guest'], default: 'user' },
    addressDetails: addressSchema,
    workingAddressDetails: workingAddressSchema,
    identification: identificationSchema,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
