const express = require('express');
const { register, getAllUsers, updateUser, softDeleteUser, deleteUser, toggleUserActiveStatus } = require('../controllers/user.controller');
const { validate, AuthMiddleware } = require('../middlewares')
const { registerSchema, getUserSchema, updateUserSchema, deleteUserSchema } = require('../validations/admin.validation')

const router = express.Router();

// Define routes
router.post('/user/register', validate(registerSchema), register);
router.get('/user/:email?', validate(getUserSchema), getAllUsers);
router.put('/user/update/:email', validate(updateUserSchema), updateUser);
router.patch('/user/soft-delete/:email', validate(deleteUserSchema), softDeleteUser);
router.delete('/user/delete/:email', validate(deleteUserSchema), deleteUser);
router.patch('/user/toggle-user-active/:email', validate(getUserSchema), toggleUserActiveStatus);

module.exports = router;