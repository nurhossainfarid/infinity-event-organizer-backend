// dependence
const express = require('express');
const bookingController = require('../../controllers/booking.controller');

const router = express.Router();

// module scaffolding
router.route('/').post(bookingController.bookingAPackage).get(bookingController.getAllBookingPackage);

router
    .route('/:id')
    .get(bookingController.getOneBookingPackage)
    .put(bookingController.updateABookingPackage)
    .delete(bookingController.deleteABookingPackage);

// exports
module.exports = router;
