import boardService from "../services/board.js";

const getAllBoards = async (req, res, next) => {
  try {
    const boards = await boardService.getAllBoards();
    res.status(200).json({ status: "Ok", items: boards.length, data: boards });
  } catch (error) {
    next(error);
  }
};
const getSingleBoard = async (req, res, next) => {
  try {
    const { id } = req.params;
    const board = await boardService.getSingleBoard(id);
    res.status(200).json({ status: "Ok", data: board });
  } catch (error) {
    next(error);
  }
};
const createBoard = async (req, res, next) => {
  try {
    const { body } = req;
    const newBoardData = {
      name: body.name,
      boardType: body.boardType,
      pointId: body.pointId,
    };
    const createdBoard = await boardService.createBoard(newBoardData);
    res.status(201).json({
      status: "Ok",
      data: createdBoard,
    });
  } catch (error) {
    next(error);
  }
};
const updateBoard = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updatedBoardData = {
      name: body.name,
      boardType: body.boardType,
    };
    const updatedBoard = await boardService.updateBoard(id, updatedBoardData);
    res.status(202).json({
      status: "Ok",
      data: updatedBoard,
    });
  } catch (error) {
    next(error);
  }
};
const deleteBoard = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBoard = await boardService.deleteBoard(id);
    res.status(202).json({ status: "Ok", data: deletedBoard });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllBoards,
  getSingleBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};
