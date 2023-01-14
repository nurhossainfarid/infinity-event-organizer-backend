/**
 * Description:  handling all user routes
 * Authority: Nur Hossain Farid
 * Date: 29/10/22
 */

// Dependencies
const express = require('express');
const userController = require('../../controllers/user.controller');

const router = express.Router();

// create all routes
router.route('/')
    .post(userController.signup)
    .get(userController.getAllUser);
router.route('/:id')
    .get(userController.getAUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

// exports router
module.exports = router;
