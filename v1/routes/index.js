import express from "express";
import customerRouter from "./customer.js";

const v1Router = express.Router();
v1Router.use("/customers", customerRouter);

export default v1Router;
