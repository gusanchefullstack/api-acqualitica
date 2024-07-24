import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllPoints = async () => {
  try {
    const allPoints = await prisma.point.findMany({
      include: {
        _count: {
          select: {
            boards: true,
          },
        },
      },
    });
    return allPoints;
  } catch (error) {
    throw error;
  }
};
const getSinglePoint = async (id) => {
  try {
    const point = await prisma.point.findUnique({
      where: { id: id },
      include: {
        boards: {
          select: {
            name: true,
            id: true,
            boardType: true,
          },
        },
      },
    });
    return point;
  } catch (error) {
    throw error;
  }
};
const createPoint = async (data) => {
  try {
    const point = await prisma.point.create({
      data: data,
    });
    return point;
  } catch (error) {
    throw error;
  }
};
const updatePoint = async (id, data) => {
  try {
    const updatedPoint = await prisma.point.update({
      where: {
        id: id,
      },
      data: {
        ...data,
      },
    });
    return updatedPoint;
  } catch (error) {
    throw error;
  }
};
const deletePoint = async (id) => {
  try {
    const deletedPoint = await prisma.point.delete({
      where: {
        id: id,
      },
    });
    return deletedPoint;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllPoints,
  getSinglePoint,
  createPoint,
  updatePoint,
  deletePoint,
};
