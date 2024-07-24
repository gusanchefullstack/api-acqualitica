import express from "express";
import pointController from "../controllers/point.js";
import { handleInputErrors } from "../middleware/inputValidation.js";
import {
  pointId,
  siteId,
  pointName,
  latlng,
} from "../middleware/pointvalidator.js";

const pointRouter = express.Router();

pointRouter.get("/", pointController.getAllPoints);
pointRouter.get(
  "/:id",
  pointId(),
  handleInputErrors,
  pointController.getSinglePoint
);
pointRouter.post(
  "/",
  siteId().exists().withMessage("Missing siteId"),
  pointName().exists().withMessage("Missing point name"),
  latlng().exists().withMessage("Missing lat/lng coordinates"),
  handleInputErrors,
  pointController.createPoint
);
pointRouter.patch(
  "/:id",
  pointId(),
  pointName().optional(),
  latlng().optional(),
  handleInputErrors,
  pointController.updatePoint
);
pointRouter.delete(
  "/:id",
  pointId(),
  handleInputErrors,
  pointController.deletePoint
);

export default pointRouter;
