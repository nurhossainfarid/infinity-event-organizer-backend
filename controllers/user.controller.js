/**
 * Description:  handling user controller
 * Authority: Nur Hossain Farid
 * Date: 29/10/22
 */

// Dependencies
const { signupService, getAllUserService, updateUserService, deleteUserService, getAUserService } = require('../services/user.service');

// signup controller for user
exports.signup = async (req, res) => {
    try {
        const result = await signupService(req.body);
        if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed sign up',
            });
        }
        res.status(200).json({
            status: 'Success',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            error: error.message,
        });
    }
};

// controller for get all user
exports.getAllUser = async (req, res) => {
    try {
        const result = await getAllUserService();
        if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed get User',
            });
        }
        res.status(200).json({
            status: 'Success',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            error: error.message,
        });
    }
};

// controller for get A user
exports.getAUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await getAUserService(id);
        if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed get A User',
            });
        }
        res.status(200).json({
            status: 'Success',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            error: error.message,
        });
    }
};

// controller for update a user
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await updateUserService(id, req.body);
        if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed update user',
            });
        }
        res.status(200).json({
            status: 'Success',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            error: error.message,
        });
    }
};

// controller for delete user
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await deleteUserService(id);
        if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed delete a user',
            });
        }
        res.status(200).json({
            status: 'Success',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            error: error.message,
        });
    }
};
