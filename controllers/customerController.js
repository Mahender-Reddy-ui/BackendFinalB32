const Customer = require("../models/Customer");

exports.getCustomers = async (req, res) => {
    const customers = await Customer.find();
    res.json(customers);
};

exports.addCustomer = async (req, res) => {
    const customer = new Customer(req.body);
    await customer.save();
    res.json({ message: " Customer added", customer });
};

exports.updateCustomer = async (req, res) => {
    const { id } = req.params;
    const updated = await Customer.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ message: " Customer updated", updated });
};

exports.deleteCustomer = async (req, res) => {
    const { id } = req.params;
    await Customer.findByIdAndDelete(id);
    res.json({ message: " Customer deleted" });
};
