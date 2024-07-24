import sensorService from "../services/sensor.js";

const getAllSensors = async (req, res, next) => {
  try {
    const sensors = await sensorService.getAllSensors();
    res
      .status(200)
      .json({ status: "Ok", items: sensors.length, data: sensors });
  } catch (error) {
    next(error);
  }
};
const getSingleSensor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sensor = await sensorService.getSingleSensor(id);
    res.status(200).json({ status: "Ok", data: sensor });
  } catch (error) {
    next(error);
  }
};
const createSensor = async (req, res, next) => {
  try {
    const { body } = req;
    const newSensorData = {
      name: body.name,
      sensorType: body.sensorType,
      boardId: body.boardId,
    };
    const createdSensor = await sensorService.createSensor(newSensorData);
    res.status(201).json({
      status: "Ok",
      data: createdSensor,
    });
  } catch (error) {
    next(error);
  }
};
const updateSensor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updatedSensorData = {
      name: body.name,
      sensorType: body.sensorType,
    };
    const updatedSensor = await sensorService.updateSensor(
      id,
      updatedSensorData
    );
    res.status(202).json({
      status: "Ok",
      data: updatedSensor,
    });
  } catch (error) {
    next(error);
  }
};
const deleteSensor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedSensor = await sensorService.deleteSensor(id);
    res.status(202).json({ status: "Ok", data: deletedSensor });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllSensors,
  getSingleSensor,
  createSensor,
  updateSensor,
  deleteSensor,
};
