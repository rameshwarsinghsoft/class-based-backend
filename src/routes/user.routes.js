const express = require('express');
const UserController = require('../controllers/user.controller');
const { validate, AuthMiddleware } = require('../middlewares')
const { registerSchema, updateUserSchema, deleteUserSchema } = require('../validations/user.validation')

const router = express.Router();

// Define routes
router.post('/register', validate(registerSchema), UserController.register);
// router.get('/', AuthMiddleware.verifyToken, UserController.getAllUsers);
router.get('/:email?', UserController.getAllUsers);
router.put('/update/:email', validate(updateUserSchema), UserController.updateUser);
router.delete('/delete/:email', validate(deleteUserSchema), UserController.deleteUser);

module.exports = router;

