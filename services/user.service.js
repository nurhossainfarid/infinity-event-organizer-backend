/**
 * Description:  handling user service
 * Authority: Nur Hossain Farid
 * Date: 29/10/22
 */

// Dependencies
const User = require('../models/User.model');

// create a user
exports.signupService = async (data) => {
    const user = await User.create(data);
    return user;
};

// get all user service
exports.getAllUserService = async () => {
    const users = await User.find({});
    return users;
};

// get one user service
exports.getAUserService = async (userId) => {
    const user = await User.findById({ _id: userId });
    return user;
};

// update user
exports.updateUserService = async (userId, data) => {
    const user = await User.updateOne({ _id: userId }, data);
    return user;
};

// delete user
exports.deleteUserService = async (userId) => {
    const user = await User.deleteOne({ _id: userId });
    return user;
};

// find by email
exports.findByEmailService = async (email) => {
    const user = await User.findOne({ email: email });
    return user;
};
