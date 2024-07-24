import express from "express";
import sensorController from "../controllers/sensor.js";
import { handleInputErrors } from "../middleware/inputValidation.js";
import {
  sensorId,
  sensorName,
  sensorType,
  boardId,
} from "../middleware/sensorvalidator.js";

const sensorRouter = express.Router();

sensorRouter.get("/", sensorController.getAllSensors);
sensorRouter.get(
  "/:id",
  sensorId(),
  handleInputErrors,
  sensorController.getSingleSensor
);
sensorRouter.post(
  "/",
  boardId().exists().withMessage("Missing boardId"),
  sensorName().exists().withMessage("Missing sensor name"),
  sensorType().exists().withMessage("Missing sensor type"),
  handleInputErrors,
  sensorController.createSensor
);
sensorRouter.patch(
  "/:id",
  sensorId(),
  sensorName().optional(),
  sensorType().optional(),
  handleInputErrors,
  sensorController.updateSensor
);
sensorRouter.delete(
  "/:id",
  sensorId(),
  handleInputErrors,
  sensorController.deleteSensor
);

export default sensorRouter;
