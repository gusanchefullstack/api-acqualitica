import express from "express";
import customerRouter from "./customer.js";
import siteRouter from "./site.js";

const v1Router = express.Router();
v1Router.use("/customers", customerRouter);
v1Router.use("/sites", siteRouter);

export default v1Router;
