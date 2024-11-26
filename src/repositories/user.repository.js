const { User } = require('../models');

class UserRepository {
    
    async createUser(userData) {
        try {
            const user = new User(userData);
            return await user.save();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async findUserByEmail(email) {
        try {
            return await User.findOne({ email });
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getAllUsers() {
        try {
            return await User.find();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async updateUser(email, updateData) {
        try {
            const { name } = updateData;
            return await User.findOneAndUpdate(
                { email },
                { $set: { name } },
                { new: true }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async deleteUser(email) {
        try {
            return await User.deleteOne({ email });
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = new UserRepository();