// dependence

const {
    checkById,
    bookingAPackageService,
    getAllBookingService,
    getOneBookingService,
    updateABookingService,
    deleteABookingService,
    findBookingByOrganizerService,
} = require('../services/booking.service');

// booking a package
exports.bookingAPackage = async (req, res) => {
    try {
        const result = await bookingAPackageService(req.body);
        // check validation
        if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to booking a package',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Package booking was successfully',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Package could not booking successfully',
            error: error.message,
        });
    }
};

// handle all booking package
exports.getAllBookingPackage = async (req, res) => {
    try {
        const result = await getAllBookingService();
        // check validation
        if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to get all booking',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Get all booking was successfully',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Get all booking service failed',
            error: error.message,
        });
    }
};

// handle get one booking
exports.getOneBookingPackage = async (req, res) => {
    const { id } = req.params;
    try {
        const isIdValid = await checkById(id);
        const result = await getOneBookingService(id);
        // check validation
        if (!isIdValid) {
            res.status(400).json({
                status: 'Failed',
                error: 'Invalid Id, please check your id and provide valid id',
            });
        } else if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to get one booking',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Get one booking was successfully',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Get one booking service failed',
            error: error.message,
        });
    }
};

// handle find booking by organizer name
exports.findBookingByOrganizer = async (req, res) => {
    const { organizerName } = req.params;
    try {
        const result = await findBookingByOrganizerService(organizerName);
        // check validation
        if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to find booking by organizer name',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Find booking by organizer name was successfully',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Find booking by organizer name was failed',
            error: error.message,
        });
    }
};

// handle update a booking
exports.updateABookingPackage = async (req, res) => {
    const { id } = req.params;
    try {
        const isIdValid = await checkById(id);
        const result = await updateABookingService(id, req.body);
        // check validation
        if (!isIdValid) {
            res.status(400).json({
                status: 'Failed',
                error: 'Invalid Id, please check your id and provide valid id',
            });
        } else if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to update a booking',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Update a booking was successfully',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Update a booking service failed',
            error: error.message,
        });
    }
};

// handle delete a booking
exports.deleteABookingPackage = async (req, res) => {
    const { id } = req.params;
    try {
        const isIdValid = await checkById(id);
        const result = await deleteABookingService(id);
        // check validation
        if (!isIdValid) {
            res.status(400).json({
                status: 'Failed',
                error: 'Invalid Id, please check your id and provide valid id',
            });
        } else if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to delete a booking',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Delete a booking was successfully',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Delete a booking service failed',
            error: error.message,
        });
    }
};
