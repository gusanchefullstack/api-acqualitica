import express from "express";
import boardController from "../controllers/board.js";
import { handleInputErrors } from "../middleware/inputValidation.js";
import {
  boardId,
  pointId,
  boardName,
  boardType,
} from "../middleware/boardvalidator.js";

const boardRouter = express.Router();

boardRouter.get("/", boardController.getAllBoards);
boardRouter.get(
  "/:id",
  boardId(),
  handleInputErrors,
  boardController.getSingleBoard
);
boardRouter.post(
  "/",
  pointId().exists().withMessage("Missing pointId"),
  boardName().exists().withMessage("Missing board name"),
  boardType().exists().withMessage("Missing board type"),
  handleInputErrors,
  boardController.createBoard
);
boardRouter.patch(
  "/:id",
  boardId(),
  boardName().optional(),
  boardType().optional(),
  handleInputErrors,
  boardController.updateBoard
);
boardRouter.delete(
  "/:id",
  boardId(),
  handleInputErrors,
  boardController.deleteBoard
);

export default boardRouter;
