// Dependence
const mongoose = require('mongoose');
const validator = require('validator');

// schema design
const bookingSchema = mongoose.Schema({
    customerName: {
        type: String,
        trim: true,
        required: [true, 'please provide your full name'],
        lowercase: true,
        minLength: [3, 'Name minimum length is 3 characters'],
        maxLength: [20, 'Name maximum length is 20 characters'],
    },
    customerEmail: {
        type: String,
        required: [true, 'Email is required'],
        validate: [validator.isEmail, 'Provide your valid email address'],
    },
    customerNumber: {
        type: String,
        required: [true, 'Contact number is required'],
        validate: [validator.isMobilePhone, 'please provide your valid phone number'],
        minLength: [11, 'only allow for bangladeshi users'],
        maxLength: [11, 'only allow for bangladeshi users'],
    },
    customerAddress: {
        type: String,
        trim: true,
        required: [true, 'Address is required'],
        lowercase: true,
    },
    packageName: {
        type: String,
        required: [true, 'Package is required'],
        lowercase: true,
    },
    packagePrice: {
        type: Number,
        required: [true, 'Package price is required'],
    },
    organizerName: {
        type: String,
        required: [true, 'Organization name is required'],
        minLength: [3, 'Minimum organization name length are 3 characters'],
        lowercase: true,
    },
    date: {
        type: String,
        required: [true, 'Date is required'],
        trim: true,
    },
    time: {
        type: String,
        required: [true, 'Time is required'],
        trim: true,
    },
});

// exports
const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
