// Dependency
const mongoose = require('mongoose');
const validator = require('validator');

const { ObjectId } = mongoose.Schema.Types;

// schema design
const orderPackageSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'please provide your first name'],
        lowercase: true,
        minLength: [3, 'Name minimum length is 3 characters'],
        maxLength: [20, 'Name maximum length is 20 characters'],
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'Email address is required'],
        validate: [validator.isEmail, 'Provide your valid email'],
        unique: true,
    },
    phone: {
        type: String,
        required: [true, 'Contact number is required'],
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
    packageName: {
        type: String,
        required: [true, 'Package is required'],
        unique: true,
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
        unique: true,
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

// exports model
const OrderPackage = mongoose.model('OrderPackage', orderPackageSchema);
module.exports = OrderPackage;
