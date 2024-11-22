const mongoose = require('mongoose');

class UserModel {
    constructor() {
        this.userSchema = new mongoose.Schema({
            name: { type: String, required: true },
            email: { type: String, required: true, unique: true },
            password: { type: String, required: false },
        }, { timestamps: true });

        this.User = mongoose.model('User', this.userSchema);
    }

    getModel() {
        return this.User;
    }
}

module.exports = new UserModel().getModel();
