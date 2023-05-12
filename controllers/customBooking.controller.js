const {
    bookingCustomService,
    findAllBookedCustomService,
    findOneBookedCustomByIdService,
    findBookedCustomByEmailService,
    updateOneBookedCustomByIdService,
    deleteOneBookedCustomByIdService,
} = require('../services/customBooking.service');

// create custom package
exports.bookingCustom = async (req, res) => {
    try {
        const result = await bookingCustomService(req.body);
        if (!result) {
            return res.status(404).json({
                status: 'Failed',
                message: 'Failed to booking custom package',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Successfully booking custom package',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Failed for booked custom package',
            error: error.message,
        });
    }
};
// Find all booked custom package
exports.findAllBookedCustom = async (req, res) => {
    try {
        const result = await findAllBookedCustomService();
        if (!result) {
            return res.status(404).json({
                status: 'Failed',
                message: 'Failed to find all booked custom package',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Successfully find all booked custom package',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Failed to find all booked custom package',
            error: error.message,
        });
    }
};
// find a booked custom package
exports.findOneBookedCustomById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await findOneBookedCustomByIdService(id);
        if (!result) {
            return res.status(404).json({
                status: 'Failed',
                message: 'Failed to find one booked custom package',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Successfully find one booked custom package',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Failed to find one booked custom package',
            error: error.message,
        });
    }
};
// find booked custom package by email
exports.findBookedCustomByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const result = await findBookedCustomByEmailService(email);
        if (!result) {
            return res.status(404).json({
                status: 'Failed',
                message: 'Failed to find booked custom package by email',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Successfully find booked custom package by email',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Failed to find booked custom package by email',
            error: error.message,
        });
    }
};

// update one booked custom package
exports.updateOneBookedCustomById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await updateOneBookedCustomByIdService(id, req.body);
        if (!result) {
            return res.status(404).json({
                status: 'Failed',
                message: 'Failed to update one booked custom package',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Successfully update one booked custom package',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Failed to update one booked custom package',
            error: error.message,
        });
    }
};
// delete one booked custom package
exports.deleteOneBookedCustomById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteOneBookedCustomByIdService(id);
        if (!result) {
            return res.status(404).json({
                status: 'Failed',
                message: 'Failed to delete one booked custom package',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Successfully delete one booked custom package',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Failed to delete one booked custom package',
            error: error.message,
        });
    }
};
