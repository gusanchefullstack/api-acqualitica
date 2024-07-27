import express from "express";
import siteController from "../controllers/site.js";
import { handleInputErrors } from "../middleware/inputValidation.js";
import {
  customerId,
  siteAddress1,
  siteAddress2,
  siteCity,
  siteCountry,
  siteId,
  siteName,
  siteRegion,
  siteState,
  siteZipCode,
} from "../middleware/sitevalidator.js";

const siteRouter = express.Router();

siteRouter.get("/", siteController.getAllSites);
siteRouter.get(
  "/:id",
  siteId(),
  handleInputErrors,
  siteController.getSingleSite
);
siteRouter.post(
  "/",
  customerId().exists().withMessage("Missing customerId"),
  siteName().exists().withMessage("Missing site name").isLength({min:3, max:250}).withMessage("Invalid name lenght min:3 max:250"),
  siteAddress1().exists().withMessage("Missing site address line 1"),
  siteAddress2().exists().withMessage("Missing site address line 2"),
  siteZipCode().exists().withMessage("Missing site zip code"),
  siteCity().exists().withMessage("Missing site city"),
  siteState().exists().withMessage("Missing site state"),
  siteCountry().exists().withMessage("Missing site country"),
  siteRegion().exists().withMessage("Missing site region"),
  handleInputErrors,
  siteController.createSite
);
siteRouter.patch(
  "/:id",
  siteId(),
  siteName().optional(),
  siteAddress1().optional(),
  siteAddress2().optional(),
  siteZipCode().optional(),
  siteCity().optional(),
  siteState().optional(),
  siteCountry().optional(),
  siteRegion().optional(),
  handleInputErrors,
  siteController.updateSite
);
siteRouter.delete(
  "/:id",
  siteId(),
  handleInputErrors,
  siteController.deleteSite
);

export default siteRouter;
