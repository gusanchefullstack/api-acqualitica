import { body, param } from "express-validator";

export const customerId = () =>
  param("id").isMongoId().withMessage("Invalid object id");
export const customerName = () =>
  body("name").trim().isString().withMessage("Invalid name format");
export const customerAddress1 = () =>
  body("address1").trim().isString().withMessage("Invalid address format");
export const customerAddress2 = () =>
  body("address2").trim().isString().withMessage("Invalid address format");
export const customerCity = () =>
  body("city").trim().isString().withMessage("Invalid city format");
export const customerZipCode = () =>
  body("zipCode").trim().isString().withMessage("Invalid zip code format");
export const customerState = () =>
  body("state").trim().isString().withMessage("Invalid state format");
export const customerCountry = () =>
  body("country").trim().isString().withMessage("Invalid country format");
export const customerRegion = () =>
  body("region")
    .trim()
    .toUpperCase()
    .isIn(["NA", "EMEA", "LATAM", "APAC"])
    .withMessage("Invalid region");
export const customerPhone = () =>
  body("phone").trim().isMobilePhone().withMessage("Invalid phone format");
export const customerWebsite = () =>
  body("website").trim().isURL().withMessage("Invalid URL");
export const customerActive = () =>
  body("active").isBoolean().withMessage("Invalid active field");
