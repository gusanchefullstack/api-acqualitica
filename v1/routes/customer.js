import express from "express";
import customerController from "../controllers/customer.js";
import { handleInputErrors } from "../middleware/inputValidation.js";
import {
  customerId,
  customerName,
  customerAddress1,
  customerAddress2,
  customerZipCode,
  customerCity,
  customerState,
  customerCountry,
  customerPhone,
  customerRegion,
  customerWebsite,
  customerActive,
} from "../middleware/customervalidator.js";

const customerRouter = express.Router();

customerRouter.get("/", customerController.getAllCustomers);
customerRouter.post(
  "/",
  customerName().exists().withMessage("Missing customer name"),
  customerAddress1().exists().withMessage("Missing Address 1 Line"),
  customerAddress2().exists().withMessage("Missing Address 2 Line"),
  customerCity().exists().withMessage("Missing customer city"),
  customerZipCode().exists().withMessage("Missing customer zipCode"),
  customerState().exists().withMessage("Missing customer state"),
  customerCountry().exists().withMessage("Missing customer country"),
  customerRegion().exists().withMessage("Missing customer region"),
  customerPhone().exists().withMessage("Missing customer phone"),
  customerWebsite().exists().withMessage("Missing customer website"),
  customerActive().exists().withMessage("Missing customer status"),
  handleInputErrors,
  customerController.createCustomer
);
customerRouter.get(
  "/:id",
  customerId(),
  handleInputErrors,
  customerController.getSingleCustomer
);

customerRouter.patch(
  "/:id",
  customerId(),
  customerName().optional(),
  customerAddress1().optional(),
  customerAddress2().optional(),
  customerCity().optional(),
  customerZipCode().optional(),
  customerState().optional(),
  customerCountry().optional(),
  customerRegion().optional(),
  customerPhone().optional(),
  customerWebsite().optional(),
  customerActive().optional(),
  handleInputErrors,
  customerController.updateCustomer
);
customerRouter.delete(
  "/:id",
  customerId(),
  handleInputErrors,
  customerController.deleteCustomer
);

export default customerRouter;
