// dependencies
const express = require('express');
const customBookingController = require('../../controllers/customBooking.controller');

const router = express.Router();

// module scaffolding
router
    .route('/')
    .post(customBookingController.bookingCustom)
    .get(customBookingController.findAllBookedCustom);

router
    .route('/:id')
    .get(customBookingController.findOneBookedCustomById)
    .patch(customBookingController.updateOneBookedCustomById)
    .delete(customBookingController.deleteOneBookedCustomById);

router.route('/email/:email').get(customBookingController.findBookedCustomByEmail);

// exports
module.exports = router;
