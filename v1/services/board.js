import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllBoards = async () => {
  try {
    const allBoards = await prisma.board.findMany({
      include: {
        _count: {
          select: {
            sensors: true,
          },
        },
      },
    });
    return allBoards;
  } catch (error) {
    throw error;
  }
};
const getSingleBoard = async (id) => {
  try {
    const board = await prisma.board.findUnique({
      where: { id: id },
      include: {
        sensors: {
          select: {
            name: true,
            id: true,
            sensorType: true,
          },
        },
      },
    });
    return board;
  } catch (error) {
    throw error;
  }
};
const createBoard = async (data) => {
  try {
    const board = await prisma.board.create({
      data: data,
    });
    return board;
  } catch (error) {
    throw error;
  }
};
const updateBoard = async (id, data) => {
  try {
    const updatedBoard = await prisma.board.update({
      where: {
        id: id,
      },
      data: {
        ...data,
      },
    });
    return updatedBoard;
  } catch (error) {
    throw error;
  }
};
const deleteBoard = async (id) => {
  try {
    const deletedBoard = await prisma.board.delete({
      where: {
        id: id,
      },
    });
    return deletedBoard;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllBoards,
  getSingleBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};
