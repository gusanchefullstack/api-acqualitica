import customerService from "../services/customer.js";

const getAllCustomers = async (req, res, next) => {
  try {
    const allCustomers = await customerService.getAllCustomers();
    res
      .status(200)
      .json({ status: "Ok", items: allCustomers.length, data: allCustomers });
  } catch (error) {
    next(error);
  }
};
const getSingleCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const customer = await customerService.getSingleCustomer(id);
    res.status(200).json({ status: "Ok", data: customer });
  } catch (error) {
    next(error);
  }
};
const createCustomer = async (req, res, next) => {
  try {
    const { body } = req;
    const newCustomerData = {
      name: body.name,
      address1: body.address1,
      address2: body.address2,
      city: body.city,
      zipCode: body.zipCode,
      state: body.state,
      country: body.country,
      region: body.region,
      phone: body.phone,
      website: body.website,
      active: body.active,
    };
    const createdCustomer = await customerService.createCustomer(
      newCustomerData
    );
    res.status(201).json({
      status: "Ok",
      data: createdCustomer,
    });
  } catch (error) {
    next(error);
  }
};
const updateCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updatedCustomerData = {
      name: body.name,
      address1: body.address1,
      address2: body.address2,
      city: body.city,
      zipCode: body.zipCode,
      state: body.state,
      country: body.country,
      region: body.region,
      phone: body.phone,
      website: body.website,
      active: body.active,
    };
    const updatedCustomer = await customerService.updateCustomer(
      id,
      updatedCustomerData
    );
    res.status(202).json({
      status: "Ok",
      data: updatedCustomer,
    });
  } catch (error) {
    next(error);
  }
};
const deleteCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedCustomer = await customerService.deleteCustomer(id);
    res.status(202).json({ status: "Ok", data: deletedCustomer });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllCustomers,
  getSingleCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
