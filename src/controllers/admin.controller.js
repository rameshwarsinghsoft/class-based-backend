const { AdminService } = require('../services');
const { ApiResponse } = require('../utils/Response');
const { StatusCodes } = require('http-status-codes');

class AdminController {

    async register(req, res) {
        try {
            const { name, email, mobile_number, role } = req.body;
            const user = await AdminService.registerUser({ name, email, mobile_number, role });
            return ApiResponse(res, user.status, user.message, user.success ? user.data : undefined);
        } catch (error) {
            return ApiResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error.toString());
        }
    }

    async getAllUsers(req, res) {
        const email = req.params.email;
        try {
            const user = await AdminService.getAllUsers(email);
            return ApiResponse(res, user.status, user.message, user.success ? user.data : undefined);
        } catch (error) {
            return ApiResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error.toString());
        }
    }

    async updateUser(req, res) {
        try {
            const byEmail = req.params.email;
            const { name, email, mobile_number } = req.body;
            const user = await AdminService.updateUser(byEmail, { name, email, mobile_number });
            return ApiResponse(res, user.status, user.message, user.success ? user.data : undefined);
        } catch (error) {
            return ApiResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error.toString());
        }
    }

    async toggleUserActiveStatus(req, res) {
        try {
            const email = req.params.email;
            const user = await AdminService.toggleUserActiveStatus(email);
            return ApiResponse(res, user.status, user.message, user.success ? user.user : undefined);
        } catch (error) {
            return ApiResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error.toString());
        }
    }

    async softDeleteUser(req, res) {
        try {
            const email = req.params.email;
            const user = await AdminService.softDeleteUser(email);
            return ApiResponse(res, user.status, user.message, user.success ? user.user : undefined);
        } catch (error) {
            return ApiResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error.toString());
        }
    }

    async deleteUser(req, res) {
        try {
            const email = req.params.email;
            const user = await AdminService.deleteUser(email);
            return ApiResponse(res, user.status, user.message, user.success ? user.user : undefined);
        } catch (error) {
            return ApiResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error.toString());
        }
    }

}

module.exports = new AdminController();