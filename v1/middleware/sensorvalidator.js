import { body, param } from "express-validator";

export const sensorId = () =>
  param("id").isMongoId().withMessage("Invalid object id");
export const boardId = () =>
  body("boardId").isMongoId().withMessage("Invalid point id");
export const sensorName = () =>
  body("name").trim().isString().withMessage("Invalid name format").isLength({min:3, max:64}).withMessage("Invalid name lenght min:3 max:64");
export const sensorType = () =>
  body("sensorType")
    .trim()
    .toUpperCase()
    .isIn(["TEMPERATURE", "PH", "FLOW", "DO"])
    .withMessage("Invalid sensor type");
