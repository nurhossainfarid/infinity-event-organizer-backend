// dependencies

const {
    createPackageService,
    getAllPackageService,
    checkById,
    getOnePackageService,
    updateOnePackageService,
    deletePackageService,
} = require('../services/package.service');

// control services
// handle create package
exports.createPackage = async (req, res) => {
    try {
        const result = await createPackageService(req.body);
        // check validation
        if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to create package',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'package created successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'package could not create successfully',
            error: error.message,
        });
    }
};

// handle get all packages
exports.getAllPackage = async (req, res) => {
    try {
        
        const result = await getAllPackageService(req.query);
        // check validation
        if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to get package',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'package get successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'package could not get successfully',
            error: error.message,
        });
    }
};

// handle get one packages
exports.getOnePackage = async (req, res) => {
    const { id } = req.params;
    try {
        const isIdValid = await checkById(id);
        const result = await getOnePackageService(id);
        // check validation
        if (!isIdValid) {
            res.status(400).json({
                status: 'Failed',
                error: 'Invalid Id, please check your id and provide valid id',
            });
        } else if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to get one package',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'package get successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'package could not get successfully',
            error: error.message,
        });
    }
};

// handle update one packages
exports.updatePackage = async (req, res) => {
    const { id } = req.params;
    try {
        const isIdValid = await checkById(id);
        const result = await updateOnePackageService(id, req.body);
        // check validation
        if (!isIdValid) {
            res.status(400).json({
                status: 'Failed',
                error: 'Invalid Id, please check your id and provide valid id',
            });
        } else if (!result && !result.modifiedCount) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to update package',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'package update successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'package could not update successfully',
            error: error.message,
        });
    }
};

// handle delete one packages
exports.deletePackage = async (req, res) => {
    const { id } = req.params;
    try {
        const isIdValid = await checkById(id);
        const result = await deletePackageService(id);
        // check validation
        if (!isIdValid) {
            res.status(400).json({
                status: 'Failed',
                error: 'Invalid Id, please check your id and provide valid id',
            });
        } else if (!result && !result.deletedCount) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to delete package',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'package delete successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'package could not delete successfully',
            error: error.message,
        });
    }
};
