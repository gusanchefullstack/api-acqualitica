import customerService from "../services/customer.js";

const getAllCustomers = (req, res) => {
  const allCustomers = customerService.getAllCustomers();
  res.status(200).json({ status: "Ok", data: allCustomers });
};
const getSingleCustomer = (req, res) => {
  const { id } = req.params;
  const customer = customerService.getSingleCustomer(id);
  res.status(200).send(`Get single customer ${id}`);
};
const createCustomer = (req, res) => {
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
  const createdCustomer = customerService.createCustomer(newCustomerData);
  res.status(201).json({
    status: "Ok",
    data: createdCustomer,
  });
};
const updateCustomer = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const updatedCustomerData = {
    id: id,
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
  const updatedCustomer = customerService.updateCustomer(
    id,
    updatedCustomerData
  );
  res.status(202).json({
    status: "Ok",
    data: updatedCustomer,
  });
};
const deleteCustomer = (req, res) => {
  const { id } = req.params;
  customerService.deleteCustomer(id);
  res.status(202).send(`Delete single customer ${id}`);
};

export default {
  getAllCustomers,
  getSingleCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
