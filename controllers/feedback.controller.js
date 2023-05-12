const { createFeedbackService, getAllFeedbackService, findOneFeedbackByIdService, findFeedbackByEmail, findFeedbackByOrgNameService, updateFeedbackByIdService, deleteFeedbackByIdService } = require("../services/feedback.service");

// create feedback
exports.createFeedback = async (req, res) => {
    try {
        const result = await createFeedbackService(req.body);
        if (!result) {
            return res.status(404).json({
                status: 'Failed',
                message: 'Failed to create feedback',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Successfully created feedback',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Failed to create feedback',
            error: error.message,
        });
    }
};
// get all feedback
exports.getAllFeedback = async (req, res) => {
    try {
        const result = await getAllFeedbackService();
        if (!result) {
            return res.status(404).json({
                status: 'Failed',
                message: 'Failed to get all feedback',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Successfully get all feedback',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Failed to get all feedback',
            error: error.message,
        });
    }
};

// find one feedback by id
exports.findOneFeedbackById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await findOneFeedbackByIdService(id);
        if (!result) {
            return res.status(404).json({
                status: 'Failed',
                message: 'Failed to find one feedback',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Successfully find one feedback',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Failed to find one feedback',
            error: error.message,
        });
    }
};

// find feedback by email
exports.findFeedbackByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const result = await findFeedbackByEmail(email);
        if (!result) {
            return res.status(404).json({
                status: 'Failed',
                message: 'Failed to find feedback by email',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Successfully find feedback by email',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Failed to find feedback by email',
            error: error.message,
        });
    }
};

// find feedback by organizer name
exports.findFeedbackByOrgName = async (req, res) => {
    try {
        const { organizerName } = req.params;
        const result = await findFeedbackByOrgNameService(organizerName);
        if (!result) {
            return res.status(404).json({
                status: 'Failed',
                message: 'Failed to find feedback by organizer name',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Successfully find feedback by organizer name',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Failed to find feedback by organizer name',
            error: error.message,
        });
    }
};

// update feedback by id
exports.updateFeedbackById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await updateFeedbackByIdService(id, req.body);
        if (!result) {
            return res.status(404).json({
                status: 'Failed',
                message: 'Failed to update feedback by id',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Successfully update feedback by id',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Failed to update feedback by id',
            error: error.message,
        });
    }
};
// delete feedback by id
exports.deleteFeedbackById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteFeedbackByIdService(id);
        if (!result) {
            return res.status(404).json({
                status: 'Failed',
                message: 'Failed to delete feedback by id',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Successfully delete feedback by id',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Failed to delete feedback by id',
            error: error.message,
        });
    }
};
