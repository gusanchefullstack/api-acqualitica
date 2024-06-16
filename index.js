import "dotenv/config";
import express from "express";
import apiv1Router from "./v1/routes/index.js";

const app = express();

const consoleLogger = (req, res, next) => {
  console.log(`Request: Method: ${req.method}, Url: ${req.url}`);
  next();
};

app.use(express.json());
app.use(consoleLogger);
app.use("/api/v1", apiv1Router);

app.listen(process.env.EXPRESS_PORT, () =>
  console.log(
    `Acqualitica API is now running on port ${process.env.EXPRESS_PORT}`
  )
);
