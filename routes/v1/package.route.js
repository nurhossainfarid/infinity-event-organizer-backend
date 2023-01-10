// Dependencies
const express = require('express');
const packageController = require('../../controllers/package.controller');

const router = express.Router();

// module scaffolding
router.route('/').post(packageController.createPackage).get(packageController.getAllPackage);

router.route('/:id')
    .get(packageController.getOnePackage)
    .put(packageController.updatePackage)
    .delete(packageController.deletePackage);

// exports
module.exports = router;
