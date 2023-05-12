// dependencies
const CustomBooking = require('../models/CustomBooking.model');

// Services

// Booking a custom package
exports.bookingCustomService = async (data) => {
    const result = await CustomBooking.create(data);
    return result;
};

// Get all booking custom package
exports.findAllBookedCustomService = async () => {
    const result = await CustomBooking.find({});
    return result;
};

// Get one booking custom package
exports.findOneBookedCustomByIdService = async (id) => {
    const result = await CustomBooking.findById({ _id: id });
    return result;
};

// Find booking custom package by email
exports.findBookedCustomByEmailService = async (e) => {
    const result = await CustomBooking.find({ email: e });
    return result;
};

// update a booking custom package
exports.updateOneBookedCustomByIdService = async (id, data) => {
    const result = await CustomBooking.updateOne({ _id: id }, data);
    return result;
};

// delete update a booking custom package
exports.deleteOneBookedCustomByIdService = async (id) => {
    const result = await CustomBooking.deleteOne({ _id: id });
    return result;
};
