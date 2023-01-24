// Dependencies
const mongoose = require('mongoose');
const validator = require('validator');

const { ObjectId } = mongoose.Schema.Types;

// schema design
const organizationSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Organization name is required'],
        minLength: [3, 'Minimum organization name length are 3 characters'],
        lowercase: true,
        unique: true,
    },
    contactNumber: {
        type: String,
        required: [true, 'Contact number is required'],
        minLength: [11, 'Only allow bangladeshi number'],
        maxLength: [11, 'Only allow bangladeshi number'],
        unique: true,
        validate: [
            validator.isMobilePhone,
            'Please check your phone number and provide a valid phone number',
        ],
    },
    email: {
        type: String,
        required: [true, 'Email address is required'],
        trim: true,
        lowercase: true,
        unique: true,
        validate: [validator.isEmail, 'Provide your valid email'],
    },
    address: {
        type: String,
        trim: true,
        required: [true, 'Address is required'],
        lowercase: true,
    },
    image: {
        type: String,
        required: [true, 'Image is required'],
        validate: [validator.isURL, 'Please provide your valid URL'],
    },
    status: {
        type: String,
        required: [true, 'Status is required'],
        enum: {
            values: ['active', 'inactive'],
            default: 'active',
        },
    },
    packages: [
        {
            type: ObjectId,
            ref: 'Package',
        },
    ],
});

// exports model
const Organization = mongoose.model('Organization', organizationSchema);
module.exports = Organization;
