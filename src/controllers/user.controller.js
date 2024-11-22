const { UserService } = require('../services');
const { ApiResponse } = require('../utils/Response');

const { StatusCodes } = require('http-status-codes');

class UserController {

    async register(req, res) {
        try {
            const { name, email } = req.body;
            const user = await UserService.registerUser({name, email});
            return ApiResponse(res, user.status, user.message, user.success ? user.data : undefined);
        } catch (error) {
            return ApiResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error.toString());
        }
    }

    async getAllUsers(req, res) {
        const email = req.params.email;
        try {
            const user = await UserService.getAllUsers(email);
            return ApiResponse(res, user.status, user.message, user.success ? user.data : undefined);
        } catch (error) {
            return ApiResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error.toString());
        }
    }

    async updateUser(req, res) {
        try {
            const email = req.params.email;
            const { name } = req.body;
            const user = await UserService.updateUser(email, {name});
            return ApiResponse(res, user.status, user.message, user.success ? user.data : undefined);
        } catch (error) {
            return ApiResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error.toString());
        }
    }

    async deleteUser(req, res) {
        try {
            const email = req.params.email;
            const user = await UserService.deleteUser(email);
            return ApiResponse(res, user.status, user.message, user.success ? user.user : undefined);
        } catch (error) {
            return ApiResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error.toString());
        }
    }

}

module.exports = new UserController();
