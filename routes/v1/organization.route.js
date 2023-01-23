// Dependencies
const express = require('express');
const organizationController = require('../../controllers/organization.controller');

const router = express.Router();

// module scaffolding
router
    .route('/')
    .post(organizationController.createOrganization)
    .get(organizationController.getAllOrganization);
router.route('/email/:email').get(organizationController.findOrganizerByEmail);
router.route('/name/:name').get(organizationController.findOrganizerByName);
router
    .route('/:id')
    .get(organizationController.getOneOrganization)
    .patch(organizationController.updateOrganization)
    .delete(organizationController.deleteOrganization);

// exports
module.exports = router;
