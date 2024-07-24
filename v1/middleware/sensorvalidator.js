import { body, param } from "express-validator";

export const sensorId = () =>
  param("id").isMongoId().withMessage("Invalid object id");
export const boardId = () =>
  body("boardId").isMongoId().withMessage("Invalid point id");
export const sensorName = () =>
  body("name").trim().isString().withMessage("Invalid name format");
export const sensorType = () =>
  body("sensorType")
    .trim()
    .toUpperCase()
    .isIn(["RASPBERRYPI", "ARDUINO", "PARTICLE", "OTHER"])
    .withMessage("Invalid sensor type");
