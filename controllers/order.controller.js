// dependence

const {
    orderAPackageService,
    getAllOrderService,
    getOneOrderService,
    updateAOrderService,
    deleteAOrderService,
    checkById,
} = require('../services/order.service');

// order a package
exports.orderAPackage = async (req, res) => {
    try {
        const order = await orderAPackageService(req.body);
        // check validation
        if (!order) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to order a package',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Package order was successfully',
            data: order,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Package could not order successfully',
            error: error.message,
        });
    }
};

// handle all ordered package
exports.getAllOrder = async (req, res) => {
    try {
        const result = await getAllOrderService();
        // check validation
        if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to get all order',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Get all order was successfully',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Get all order service failed',
            error: error.message,
        });
    }
};

// handle get one order
exports.getOneOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const isIdValid = await checkById(id);
        const result = await getOneOrderService(id);
        // check validation
        if (!isIdValid) {
            res.status(400).json({
                status: 'Failed',
                error: 'Invalid Id, please check your id and provide valid id',
            });
        } else if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to get one order',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Get one order was successfully',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Get one order service failed',
            error: error.message,
        });
    }
};

// handle update a order
exports.updateAOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const isIdValid = await checkById(id);
        const result = await updateAOrderService(id, req.body);
        // check validation
        if (!isIdValid) {
            res.status(400).json({
                status: 'Failed',
                error: 'Invalid Id, please check your id and provide valid id',
            });
        } else if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to update a order',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Update a order was successfully',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Update a order service failed',
            error: error.message,
        });
    }
};

// handle delete a order
exports.deleteAOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const isIdValid = await checkById(id);
        const result = await deleteAOrderService(id);
        // check validation
        if (!isIdValid) {
            res.status(400).json({
                status: 'Failed',
                error: 'Invalid Id, please check your id and provide valid id',
            });
        } else if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to delete a order',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Delete a order was successfully',
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Delete a order service failed',
            error: error.message,
        });
    }
};
