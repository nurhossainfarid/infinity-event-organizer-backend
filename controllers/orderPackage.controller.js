// Dependency

const {
    orderAPackageService,
    allOrderedPackageService,
    oneOrderedPackageService,
} = require('../services/orderPackage.service');

// order a package
exports.orderPackage = async (req, res) => {
    try {
        const result = await orderAPackageService(req.body);
        if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to order a package',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Package order successfully done',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'Package could not order successfully',
            error: error.message,
        });
    }
};

// read all ordered package
exports.allOrderedPackage = async (req, res) => {
    try {
        const result = await allOrderedPackageService();
        if (!result) {
            return res.status(400).json({
                status: 'Failed',
                message: 'Failed to read ordered package',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Successfully read all ordered package',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'Order package could not ready successfully',
            error: error.message,
        });
    }
};

// read one ordered package
exports.oneOrderPackage = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await oneOrderedPackageService(id);
        if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to read one ordered package',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Successfully read one ordered package',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'A order package could not be found successfully',
            error: error.message,
        });
    }
};

// update order package

// delete order package
