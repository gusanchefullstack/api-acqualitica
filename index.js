import "dotenv/config";
import express from "express";
import morgan from "morgan";
import apiv1Router from "./v1/routes/index.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", apiv1Router);

app.listen(process.env.EXPRESS_PORT, () =>
  console.log(
    `Acqualitica API is now running on port ${process.env.EXPRESS_PORT}`
  )
);
