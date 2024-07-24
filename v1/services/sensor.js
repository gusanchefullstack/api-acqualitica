import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllSensors = async () => {
  try {
    const allSensors = await prisma.sensor.findMany({
      include: {
        _count: true,
      },
    });
    return allSensors;
  } catch (error) {
    throw error;
  }
};
const getSingleSensor = async (id) => {
  try {
    const sensor = await prisma.sensor.findUnique({
      where: { id: id },
    });
    return sensor;
  } catch (error) {
    throw error;
  }
};
const createSensor = async (data) => {
  try {
    const sensor = await prisma.sensor.create({
      data: data,
    });
    return sensor;
  } catch (error) {
    throw error;
  }
};
const updateSensor = async (id, data) => {
  try {
    const updatedSensor = await prisma.sensor.update({
      where: {
        id: id,
      },
      data: {
        ...data,
      },
    });
    return updatedSensor;
  } catch (error) {
    throw error;
  }
};
const deleteSensor = async (id) => {
  try {
    const deletedSensor = await prisma.sensor.delete({
      where: {
        id: id,
      },
    });
    return deletedSensor;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllSensors,
  getSingleSensor,
  createSensor,
  updateSensor,
  deleteSensor,
};
