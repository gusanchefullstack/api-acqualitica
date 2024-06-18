import express from "express";
import customerController from "../controllers/customer.js";

const customerRouter = express.Router();

customerRouter.get("/", customerController.getAllCustomers);
customerRouter.post("/", customerController.createCustomer);
customerRouter.get("/:id", customerController.getSingleCustomer);
customerRouter.patch("/:id", customerController.updateCustomer);
customerRouter.delete("/:id", customerController.deleteCustomer);

export default customerRouter;
