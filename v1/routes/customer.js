import express from "express";

const customerRouter = express.Router();

customerRouter.get("/", (req, res) => {
  res.json({message: "Hello customer"});
});
customerRouter.get("/:id", (req, res) => {
  res.json({message: "Hello customer"});
});
customerRouter.post("/", (req, res) => {
  res.json({message: "Hello customer"});
});
customerRouter.patch("/:id", (req, res) => {
  res.json({message: "Hello customer"});
});
customerRouter.delete("/:id", (req, res) => {
  res.json({message: "Hello customer"});
});

export default customerRouter;
