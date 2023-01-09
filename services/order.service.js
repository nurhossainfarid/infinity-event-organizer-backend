// dependence
const Order = require('../models/Order.model');

// check ID is valid
exports.checkById = async (id) => {
    const result = await Order.findById({ _id: id });
    return result;
};

// create order
exports.orderAPackageService = async (data) => {
    const order = await Order.create(data);
    return order;
};

// get All order
exports.getAllOrderService = async () => {
    const orders = await Order.find();
    return orders;
};

// get One order by Id
exports.getOneOrderService = async (orderId) => {
    const order = await Order.findOne({ _id: orderId });
    return order;
};

// update a order by Id
exports.updateAOrderService = async (orderId, data) => {
    const uOrder = await Order.updateOne({ _id: orderId }, data);
    return uOrder;
};

// delete a order by Id
exports.deleteAOrderService = async (orderId) => {
    const dOrder = await Order.deleteOne({ _id: orderId });
    return dOrder;
};
