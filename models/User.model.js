/**
 * Description: User models for handling user system
 * Authority: Nur Hossain Farid
 * Date: 29/10/22
 */

const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    contactNumber: {
        type: String,
        required: [true, 'Contact number is required'],
        validate: [validator.isMobilePhone, 'please provide your valid phone number'],
        minLength: [11, 'only allow for bangladeshi users'],
        maxLength: [11, 'only allow for bangladeshi users'],
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'Email address is required'],
        validate: [validator.isEmail, 'Provide your valid email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        validate: {
            validator: (value) => {
                validator.isStrongPassword(value, {
                    minLength: 6,
                    maxLength: 20,
                    minLowercase: 3,
                    minUppercase: 1,
                    minSymbols: 1,
                    minNumbers: 1,
                });
            },
            message: 'Password {VALUE} is not strong enough',
        },
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please confirm your Password'],
        validate: function(value) {
            return value === this.password
        },
        message: 'Password does not match',
    },
    role: {
        type: String,
        enum: ['user', 'super admin', 'organizerAdmin'],
        lowercase: true,
        default: 'user',
    },
    firstName: {
        type: String,
        trim: true,
        required: [true, 'please provide your first name'],
        lowercase: true,
        minLength: [3, 'Name minimum length is 3 characters'],
        maxLength: [20, 'Name maximum length is 20 characters'],
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'please provide your first name'],
        lowercase: true,
        minLength: [3, 'Name minimum length is 3 characters'],
        maxLength: [20, 'Name maximum length is 20 characters'],
    },
    address: {
        type: String,
        trim: true,
        required: [true, 'Address is required'],
        lowercase: true,
    },
    image: {
        type: String,
        validate: [validator.isURL, 'Please provide your valid URL'],
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'blocked'],
        default: 'active',
    },
    passwordChangeAt: Date,
    passwordRestToken: String,
    passwordRestExpires: Date,
});

// create hash password
userSchema.pre('save', function (next) {
    const password = this.password;
    const saltRounds = 10;
    const slat = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(password, slat);
    this.password = hashPassword;
    this.confirmPassword = undefined;
    next();
});

// compare password
userSchema.methods.comparePassword = function (password, hashPassword) {
    const isValidPassword = bcrypt.compareSync(password, hashPassword);
    return isValidPassword;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
