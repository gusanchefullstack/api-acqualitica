import { body, param } from "express-validator";

export const boardId = () =>
  param("id").isMongoId().withMessage("Invalid object id");
export const pointId = () =>
  body("pointId").isMongoId().withMessage("Invalid point id");
export const boardName = () =>
  body("name").trim().isString().withMessage("Invalid name format").isLength({min:3, max:64}).withMessage("Invalid name lenght min:3 max:64");
export const boardType = () =>
  body("boardType")
    .trim()
    .toUpperCase()
    .isIn(["RASPBERRYPI", "ARDUINO", "PARTICLE", "OTHER"])
    .withMessage("Invalid board type");
