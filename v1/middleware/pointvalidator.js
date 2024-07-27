import { body, param } from "express-validator";

export const pointId = () =>
  param("id").isMongoId().withMessage("Invalid object id");
export const siteId = () =>
  body("siteId").isMongoId().withMessage("Invalid customer id");
export const pointName = () =>
  body("name").trim().isString().withMessage("Invalid name format").isLength({min:3, max:64}).withMessage("Invalid city lenght min:3 max:64");
export const latlng = () =>
  body("latlng").trim().isLatLong().withMessage("Invalid lat/lng format");

