// dependence
const Booking = require('../models/Booking.model');

// check ID is valid
exports.checkById = async (id) => {
    const result = await Booking.findById({ _id: id });
    return result;
};

// create order
exports.bookingAPackageService = async (data) => {
    const result = await Booking.create(data);
    return result;
};

// get All booking
exports.getAllBookingService = async () => {
    const results = await Booking.find();
    return results;
};

// get One booking by Id
exports.getOneBookingService = async (bookingId) => {
    const result = await Booking.findOne({ _id: bookingId });
    return result;
};

// update a booking by Id
exports.updateABookingService = async (bookingId, data) => {
    const uResult = await Booking.updateOne({ _id: bookingId }, data);
    return uResult;
};

// delete a booking by Id
exports.deleteABookingService = async (bookingId) => {
    const dResult = await Booking.deleteOne({ _id: bookingId });
    return dResult;
};
