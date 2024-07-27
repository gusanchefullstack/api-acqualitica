import { body, param } from "express-validator";

export const customerId = () =>
  param("id").isMongoId().withMessage("Invalid object id");
export const customerName = () =>
  body("name").trim().isString().withMessage("Invalid name format").isLength({min:3, max:250}).withMessage("Invalid name lenght min:3 max:250");
export const customerAddress1 = () =>
  body("address1").trim().isString().withMessage("Invalid address1 format").isLength({min:3, max:250}).withMessage("Invalid address1 lenght min:3 max:250");
export const customerAddress2 = () =>
  body("address2").trim().isString().withMessage("Invalid address2 format").isLength({min:3, max:250}).withMessage("Invalid address2 lenght min:3 max:250");
export const customerCity = () =>
  body("city").trim().isString().withMessage("Invalid city format").isLength({min:3, max:64}).withMessage("Invalid city lenght min:3 max:64");
export const customerZipCode = () =>
  body("zipCode").trim().isString().withMessage("Invalid zip code format").isLength({min:3, max:6}).withMessage("Invalid zipcode lenght min:3 max:6");
export const customerState = () =>
  body("state").trim().isString().withMessage("Invalid state format").isLength({min:3, max:64}).withMessage("Invalid state lenght min:3 max:64");
export const customerCountry = () =>
  body("country").trim().isString().withMessage("Invalid country format").isLength({min:3, max:64}).withMessage("Invalid country lenght min:3 max:64");
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
