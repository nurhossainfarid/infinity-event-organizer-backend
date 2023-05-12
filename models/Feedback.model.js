// dependencies
const mongoose = require('mongoose');
const validator = require('validator');

const { Schema, model } = mongoose;

// Schema create
const feedbackSchema = Schema({
    bookingRefId: {
        type: String,
        required: [true, 'Booking Reference Id is required'],
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [3, 'Name must be at least 3 characters'],
        maxLength: [20, 'Name less and equal then 20 characters'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        validate: [validator.isEmail, 'Please provide valid email'],
        lowercase: true,
    },
    packageName: {
        type: String,
        required: [true, 'Package Name is required'],
    },
    organizerName: {
        type: String,
        required: [true, 'Organizer Name is required'],
    },
    comment: {
        type: String,
        trip: true,
        required: [true, 'Comment is required'],
    },
    rating: {
        type: Number,
        enum: {
            values: [1, 2, 3, 4, 5],
            message: "status can't be {VALUE}",
        },
        required: [true, 'Rating is required'],
    },
});

// export
const Feedback = model('Feedback', feedbackSchema);
module.exports = Feedback;
