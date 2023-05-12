// dependencies
const express = require('express');
const feedbackController = require('../../controllers/feedback.controller');

const router = express.Router();

// module scaffolding
router.route('/').post(feedbackController.createFeedback).get(feedbackController.getAllFeedback);

router.route('/email/:email').get(feedbackController.findFeedbackByEmail);
router.route('/orgName/:organizerName').get(feedbackController.findFeedbackByOrgName);

router
    .route('/:id')
    .get(feedbackController.findOneFeedbackById)
    .patch(feedbackController.updateFeedbackById)
    .delete(feedbackController.deleteFeedbackById);

// exports
module.exports = router;
