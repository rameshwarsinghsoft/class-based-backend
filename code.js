service.js
const { CrudRepository } = require('../repositories');
const { User } = require('../models');
const UserRepository = new CrudRepository(User);


crud.repository.js
class CrudRepository {
    constructor(model) {
        this.model = model
    }

    async createUser(userData) {
        try {
            const user = new this.model(userData);
            return await user.save();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async findUserByEmail(email) {
        try {
            return await this.model.findOne({ email });
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getAllUsers() {
        try {
            return await this.model.find();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async updateUser(email, updateData) {
        try {
            const { name, password } = updateData;
            return await this.model.findOneAndUpdate(
                { email },
                { $set: { name, password } },
                { new: true }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async deleteUser(email) {
        try {
            return await this.model.deleteOne({ email });
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = CrudRepository;