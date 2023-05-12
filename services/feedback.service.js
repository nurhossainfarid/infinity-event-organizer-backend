// dependencies
const Feedback = require('./../models/Feedback.model');

// start service
exports.createFeedbackService = async (data) => {
    const result = await Feedback.create(data);
    return result;
};

// get all feedback
exports.getAllFeedbackService = async () => {
    const result = await Feedback.find({});
    return result;
};

// find one by id
exports.findOneFeedbackByIdService = async (id) => {
    const result = await Feedback.findById({ _id: id });
    return result;
};

// find feedback by email
exports.findFeedbackByEmail = async (e) => {
    const result = await Feedback.find({ email: e });
    return result;
};

// find feedback by organizer name
exports.findFeedbackByOrgNameService = async (orgName) => {
    const result = await Feedback.find({ organizerName: orgName });
    return result;
};

// update feedback by id
exports.updateFeedbackByIdService = async (id, data) => {
    const result = await Feedback.updateOne({ _id: id }, data);
    return result;
};

// delete feedback by id
exports.deleteFeedbackByIdService = async (id) => {
    const result = await Feedback.deleteOne({ _id: id });
    return result;
};
