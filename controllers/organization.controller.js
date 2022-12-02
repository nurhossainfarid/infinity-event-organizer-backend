// dependencies

const {
    createOrganizationService,
    getAllOrganizationService,
    getOneOrganizationService,
    updateOneOrganizationService,
    checkById,
    deleteOrganizationService,
} = require('../services/organization.service');

// control services
// handle create organization
exports.createOrganization = async (req, res) => {
    try {
        const result = await createOrganizationService(req.body);
        // check validation
        if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to create organization',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Organization created successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'Organization could not create successfully',
            error: error.message,
        });
    }
};

// handle get all organizations
exports.getAllOrganization = async (req, res) => {
    try {
        const result = await getAllOrganizationService();
        // check validation
        if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to get organization',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Organization get successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'Organization could not get successfully',
            error: error.message,
        });
    }
};

// handle get one organizations
exports.getOneOrganization = async (req, res) => {
    const { id } = req.params;
    try {
        const isIdValid = await checkById(id);
        const result = await getOneOrganizationService(id);
        // check validation
        if (!isIdValid) {
            res.status(400).json({
                status: 'Failed',
                error: 'Invalid Id, please check your id and provide valid id',
            });
        } else if (!result) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to get one organization',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Organization get successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'Organization could not get successfully',
            error: error.message,
        });
    }
};

// handle update one organizations
exports.updateOrganization = async (req, res) => {
    const { id } = req.params;
    try {
        const isIdValid = await checkById(id);
        const result = await updateOneOrganizationService(id, req.body);
        // check validation
        if (!isIdValid) {
            res.status(400).json({
                status: 'Failed',
                error: 'Invalid Id, please check your id and provide valid id',
            });
        } else if (!result && !result.modifiedCount) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to update organization',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Organization update successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'Organization could not update successfully',
            error: error.message,
        });
    }
};

// handle delete one organizations
exports.deleteOrganization = async (req, res) => {
    const { id } = req.params;
    try {
        const isIdValid = await checkById(id);
        const result = await deleteOrganizationService(id);
        // check validation
        if (!isIdValid) {
            res.status(400).json({
                status: 'Failed',
                error: 'Invalid Id, please check your id and provide valid id',
            });
        } else if (!result && !result.deletedCount) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to delete organization',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Organization delete successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'Organization could not delete successfully',
            error: error.message,
        });
    }
};
