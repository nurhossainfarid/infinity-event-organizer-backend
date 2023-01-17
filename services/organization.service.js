// Dependencies
const Organization = require('../models/Organization.model');

// start service

// check ID is valid
exports.checkById = async (id) => {
    const result = await Organization.findById({ _id: id });
    return result;
};

// create organization service
exports.createOrganizationService = async (data) => {
    const organization = await Organization.create(data);
    return organization;
};

// get all organization service
exports.getAllOrganizationService = async () => {
    const organizations = await Organization.find({}).populate('packages');
    return organizations;
};

// get one organization service
exports.getOneOrganizationService = async (id) => {
    const organization = await Organization.findById({ _id: id }).populate('packages');
    return organization;
};

// update organization by id service
exports.updateOneOrganizationService = async (id, data) => {
    const organization = await Organization.updateOne({ _id: id }, data);
    return organization;
};

// bulk update organization by id service

// delete one organization by id service
exports.deleteOrganizationService = async (id) => {
    const organization = await Organization.deleteOne({ _id: id });
    return organization;
};
