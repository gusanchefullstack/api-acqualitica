import pointService from "../services/point.js";

const getAllPoints = async (req, res, next) => {
  try {
    const points = await pointService.getAllPoints();
    res.status(200).json({ status: "Ok", items: points.length, data: points });
  } catch (error) {
    next(error);
  }
};
const getSinglePoint = async (req, res, next) => {
  try {
    const { id } = req.params;
    const point = await pointService.getSinglePoint(id);
    res.status(200).json({ status: "Ok", data: point });
  } catch (error) {
    next(error);
  }
};
const createPoint = async (req, res, next) => {
  try {
    const { body } = req;
    const newPointData = {
      name: body.name,
      latlng: body.latlng,
      siteId: body.siteId,
    };
    const createdPoint = await pointService.createPoint(newPointData);
    res.status(201).json({
      status: "Ok",
      data: createdPoint,
    });
  } catch (error) {
    next(error);
  }
};
const updatePoint = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updatedPointData = {
      name: body.name,
      latlng: body.latlng,
    };
    const updatedPoint = await pointService.updatePoint(
      id,
      updatedPointData
    );
    res.status(202).json({
      status: "Ok",
      data: updatedPoint,
    });
  } catch (error) {
    next(error);
  }
};
const deletePoint = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedPoint = await pointService.deletePoint(id);
    res.status(202).json({ status: "Ok", data: deletedPoint });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllPoints,
  getSinglePoint,
  createPoint,
  updatePoint,
  deletePoint,
};
