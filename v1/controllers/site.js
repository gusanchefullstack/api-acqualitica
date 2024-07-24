import siteService from "../services/site.js";

const getAllSites = async (req, res, next) => {
  try {
    const sites = await siteService.getAllSites();
    res.status(200).json({ status: "Ok", items: sites.length, data: sites });
  } catch (error) {
    next(error);
  }
};
const getSingleSite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const site = await siteService.getSingleSite(id);
    res.status(200).json({ status: "Ok", data: site });
  } catch (error) {
    next(error);
  }
};
const createSite = async (req, res, next) => {
  try {
    const { body } = req;
    const newSiteData = {
      name: body.name,
      address1: body.address1,
      address2: body.address2,
      city: body.city,
      zipCode: body.zipCode,
      state: body.state,
      country: body.country,
      region: body.region,
      customerId: body.customerId,
    };
    const createdSite = await siteService.createSite(newSiteData);
    res.status(201).json({
      status: "Ok",
      data: createdSite,
    });
  } catch (error) {
    next(error);
  }
};
const updateSite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updatedSiteData = {
      name: body.name,
      address1: body.address1,
      address2: body.address2,
      city: body.city,
      zipCode: body.zipCode,
      state: body.state,
      country: body.country,
      region: body.region,
    };
    const updatedSite = await siteService.updateSite(
      id,
      updatedSiteData
    );
    res.status(202).json({
      status: "Ok",
      data: updatedSite,
    });
  } catch (error) {
    next(error);
  }
};
const deleteSite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedSite = await siteService.deleteSite(id);
    res.status(202).json({ status: "Ok", data: deletedSite });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllSites,
  getSingleSite,
  createSite,
  updateSite,
  deleteSite,
};
