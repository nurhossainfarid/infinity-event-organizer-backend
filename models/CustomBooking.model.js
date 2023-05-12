// Dependencies
const mongoose = require('mongoose');
const validator = require('validator');

const { Schema, model } = mongoose;

// Schema design
const customBookingSchema = Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Name is required'],
        lowercase: true,
        minLength: [3, 'Name minimum length is 3 characters'],
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Email is required'],
        validate: [validator.isEmail, 'Please provide your valid email'],
        lowercase: true,
    },
    phone: {
        type: String,
        trim: true,
        required: [true, 'Phone number is required'],
        validate: [validator.isMobilePhone, 'please provide your valid phone number'],
        minLength: [11, 'only allow for bangladeshi users'],
        maxLength: [11, 'only allow for bangladeshi users'],
    },
    address: {
        type: String,
        trim: true,
        required: [true, 'Address is required'],
        lowercase: true,
    },
    eventCategory: {
        type: String,
        required: [true, 'Event category is required'],
        enum: {
            values: [
                'wedding',
                'birthday',
                'private party',
                'anniversaries',
                'holiday party',
                'corporate party',
                'concert',
            ],
            message: "status can't be {VALUE}",
        },
        lowercase: true,
    },
    foodItems: {
        type: String,
        required: [true, 'Food Items is required'],
    },
    attend: {
        type: Number,
        required: [true, 'Attend is required'],
    },
    organizerName: {
        type: String,
        trim: true,
        required: [true, 'Organizer Name is required'],
    },
    location: {
        type: String,
        trim: true,
        required: [true, 'Location is required'],
    },
    date: {
        type: String,
        trim: true,
        required: [true, 'Date is required'],
    },
    time: {
        type: String,
        trim: true,
        required: [true, 'Time is required'],
    },
    extraServices: {
        type: String,
    },
});

// exports
const CustomBooking = model('CustomBooking', customBookingSchema);
module.exports = CustomBooking;
