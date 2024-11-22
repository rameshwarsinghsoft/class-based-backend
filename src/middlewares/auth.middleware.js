const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { StatusCodes } = require('http-status-codes');
const { ApiResponse } = require('../utils/Response');

class AuthMiddleware {
    verifyToken(req, res, next) {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) return ApiResponse(res, StatusCodes.FORBIDDEN, 'Authentication token not provided.');

        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) return ApiResponse(res, StatusCodes.UNAUTHORIZED, 'Unauthorized: Missing, invalid, or expired authentication token.');
            const user = await User.findOne({ email: decoded.email });
            req.user = user;
            next();
        });
    }
}

module.exports = new AuthMiddleware();
