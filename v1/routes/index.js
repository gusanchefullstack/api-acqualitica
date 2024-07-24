import express from "express";
import customerRouter from "./customer.js";
import siteRouter from "./site.js";
import pointRouter from "./point.js";
import boardRouter from "./board.js";
import sensorRouter from "./sensor.js";

const v1Router = express.Router();
v1Router.use("/customers", customerRouter);
v1Router.use("/sites", siteRouter);
v1Router.use("/points", pointRouter);
v1Router.use("/boards", boardRouter);
v1Router.use("/sensors", sensorRouter);

export default v1Router;
