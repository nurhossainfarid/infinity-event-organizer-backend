// dependence
const express = require('express');
const orderController = require('../../controllers/order.controller');

const router = express.Router();

// module scaffolding
router.route('/').post(orderController.orderAPackage).get(orderController.getAllOrder);

router
    .route('/:id')
    .get(orderController.getOneOrder)
    .put(orderController.updateAOrder)
    .delete(orderController.deleteAOrder);

// exports
module.exports = router;
