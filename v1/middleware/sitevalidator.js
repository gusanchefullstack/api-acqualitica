import { body, param } from "express-validator";

export const siteId = () =>
  param("id").isMongoId().withMessage("Invalid object id");
export const customerId = () =>
  body("customerId").isMongoId().withMessage("Invalid customer id");
export const siteName = () =>
  body("name").trim().isString().withMessage("Invalid name format");
export const siteAddress1 = () =>
  body("address1").trim().isString().withMessage("Invalid address format");
export const siteAddress2 = () =>
  body("address2").trim().isString().withMessage("Invalid address format");
export const siteCity = () =>
  body("city").trim().isString().withMessage("Invalid city format");
export const siteZipCode = () =>
  body("zipCode").trim().isString().withMessage("Invalid zip code format");
export const siteState = () =>
  body("state").trim().isString().withMessage("Invalid state format");
export const siteCountry = () =>
  body("country").trim().isString().withMessage("Invalid country format");
export const siteRegion = () =>
  body("region")
    .trim()
    .toUpperCase()
    .isIn(["NA", "EMEA", "LATAM", "APAC"])
    .withMessage("Invalid region");
