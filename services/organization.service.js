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
exports.getAllOrganizationService = async (queries) => {
    const organizations = await Organization.find({})
        .skip(queries.skip)
        .limit(queries.limit)
        .populate('packages');
    return organizations;
};

// product count
exports.getCountOrganizerService = async () => {
    const cursor = Organization.find({});
    const count = await cursor.count();
    return count;
};

// get one organization service
exports.getOneOrganizationService = async (id) => {
    const organization = await Organization.findById({ _id: id }).populate('packages');
    return organization;
};

// find by email
exports.findOrganizerByEmailService = async (e) => {
    const org = await Organization.findOne({ email: e }).populate('packages');
    return org;
};
// find by organizer Name
exports.findOrganizerByNameService = async (n) => {
    const org = await Organization.findOne({ name: n }).populate('packages');
    return org;
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