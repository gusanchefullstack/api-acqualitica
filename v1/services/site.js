import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllSites = async () => {
  try {
    const allSites = await prisma.site.findMany({
      include: {
        _count: {
          select: {
            points: true,
          },
        },
      },
    });
    return allSites;
  } catch (error) {
    throw error;
  }
};
const getSingleSite = async (id) => {
  try {
    const site = await prisma.site.findUnique({
      where: { id: id },
      include: {
        points: {
          select: {
            name: true,
            latitude: true,
            longitude: true,
          },
        },
      },
    });
    return site;
  } catch (error) {
    throw error;
  }
};
const createSite = async (data) => {
  try {
    const site = await prisma.site.create({
      data: data,
    });
    return site;
  } catch (error) {
    throw error;
  }
};
const updateSite = async (id, data) => {
  try {
    const updatedSite = await prisma.site.update({
      where: {
        id: id,
      },
      data: {
        ...data,
      },
    });
    return updatedSite;
  } catch (error) {
    throw error;
  }
};
const deleteSite = async (id) => {
  try {
    const deletedSite = await prisma.site.delete({
      where: {
        id: id,
      },
    });
    return deletedSite;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllSites,
  getSingleSite,
  createSite,
  updateSite,
  deleteSite,
};
