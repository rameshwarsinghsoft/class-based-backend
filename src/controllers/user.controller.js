const { AdminService } = require('../services');
const { ApiResponse } = require('../utils/Response');
const { StatusCodes } = require('http-status-codes');

class UserController {

    async updateProfile(req, res) {
        try {
            const email = req.user;
            const { name, mobile_number } = req.body;
            const user = await AdminService.updateUser(email, { name, email, mobile_number });
            return ApiResponse(res, user.status, user.message, user.success ? user.data : undefined);
        } catch (error) {
            return ApiResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error.toString());
        }
    }
}

module.exports = new UserController();