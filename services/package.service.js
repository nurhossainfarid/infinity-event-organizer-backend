// Dependencies
const Package = require('../models/Package.model');
const Organization = require('../models/Organization.model');

// start service
// check ID is valid
exports.checkById = async (id) => {
    const result = await Package.findById({ _id: id });
    return result;
};

// create package service
exports.createPackageService = async (data) => {
    const result = await Package.create(data);
    
    // take page id and name
    const { _id: packageId, organization} = result;

    // update organization package object
    const res = await Organization.updateOne(
        { _id: organization.id }, 
        {$push: {packages: packageId}},
    )
    console.log(res.nModified);
    return result;
};

// get all package service
exports.getAllPackageService = async (query) => {
    // const { price } = query;
    // console.log(price);
    const packages = await Package.find({});
    return packages;
};

// get one package service
exports.getOnePackageService = async (id) => {
    const package = await Package.findById({ _id: id });
    return package;
};

// update package by id service
exports.updateOnePackageService = async (id, data) => {
    const package = await Package.updateOne({ _id: id }, data);
    return package;
};

// bulk update package by id service

// delete one package by id service
exports.deletePackageService = async (id) => {
    const package = await Package.deleteOne({ _id: id });
    return package;
};
