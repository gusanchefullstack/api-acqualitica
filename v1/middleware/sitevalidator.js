import { body, param } from "express-validator";

export const siteId = () =>
  param("id").isMongoId().withMessage("Invalid object id");
export const customerId = () =>
  body("customerId").isMongoId().withMessage("Invalid customer id");
export const siteName = () =>
  body("name").trim().isString().withMessage("Invalid name format").isLength({min:3, max:250}).withMessage("Invalid name lenght min:3 max:250");
export const siteAddress1 = () =>
  body("address1").trim().isString().withMessage("Invalid address format").isLength({min:3, max:250}).withMessage("Invalid address1 lenght min:3 max:250");
export const siteAddress2 = () =>
  body("address2").trim().isString().withMessage("Invalid address format").isLength({min:3, max:250}).withMessage("Invalid address2 lenght min:3 max:250");
export const siteCity = () =>
  body("city").trim().isString().withMessage("Invalid city format").isLength({min:3, max:64}).withMessage("Invalid city lenght min:3 max:64");
export const siteZipCode = () =>
  body("zipCode").trim().isString().withMessage("Invalid zip code format").isLength({min:3, max:6}).withMessage("Invalid zipcode lenght min:3 max:6");
export const siteState = () =>
  body("state").trim().isString().withMessage("Invalid state format").isLength({min:3, max:64}).withMessage("Invalid state lenght min:3 max:64");
export const siteCountry = () =>
  body("country").trim().isString().withMessage("Invalid country format").isLength({min:3, max:64}).withMessage("Invalid country lenght min:3 max:64");
export const siteRegion = () =>
  body("region")
    .trim()
    .toUpperCase()
    .isIn(["NA", "EMEA", "LATAM", "APAC"])
    .withMessage("Invalid region");
