// Dependency
const OrderPackage = require('../models/OrderPackage.model');

// start service

// oder a package
exports.orderAPackageService = async (data) => {
    const order = await OrderPackage.create(data);
    return order;
};

// get All ordered package
exports.allOrderedPackageService = async () => {
    const order = await OrderPackage.find({});
    return order;
};

// get one ordered package
exports.oneOrderedPackageService = async (id) => {
    const order = await OrderPackage.findById({ _id: id });
    return order;
};

// find order by email
exports.findOrderByEmailService = async (e) => {
    const order = await OrderPackage.find({ email: e });
    return order;
};

// update order by id
exports.updateOrderByIdService = async (id, data) => {
    const order = await OrderPackage.updateOne({ _id: id }, data);
    return order;
};

// delete order by id
exports.deleteOrderByIdService = async (id) => {
    const order = await OrderPackage.deleteOne({ _id: id });
    return order;
};
