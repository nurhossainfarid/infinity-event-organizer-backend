// Dependencies
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

// schema design
const packageSchema = mongoose.Schema({
    organization: {
        name: {
            type: String,
            required: [true, 'Organization name is required'],
        },
        id: {
            type: ObjectId,
            ref: 'Organization',
            required: true,
        },
    },
    name: {
        type: String,
        required: [true, 'Package is required'],
        unique: true,
    },
    price: {
        type: Number,
        required: [true, 'Package price is required'],
    },
    time: {
        type: String,
        required: [true, 'Package time is required'],
    },
    attend: {
        type: Number,
        required: [true, 'Package attend is required'],
    },
    category: {
        type: String,
        required: [true, 'Package category is required'],
        enum: {
            values: ['breakfast', 'lunch', 'dinner', 'snacks'],
            message: "status can't be {VALUE}",
        },
        lowercase: true,
    },
    eventName: {
        type: String,
        required: [true, 'Event name is required'],
        enum: {
            values: ['wedding', 'birthday'],
            message: "status can't be {VALUE}",
        },
    },
    foodMenu: {
        type: String,
    },
    status: {
        type: String,
        required: [true, 'Status is required'],
        enum: {
            values: ['active', 'inactive'],
            default: 'inactive',
        },
    },
});

// exports
const Package = mongoose.model('Package', packageSchema);
module.exports = Package;
