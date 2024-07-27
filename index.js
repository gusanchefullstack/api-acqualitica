import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import apiv1Router from "./v1/routes/index.js";
import { Prisma } from "@prisma/client";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", apiv1Router);

//
app.use((err, req, res, next) => {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    err.status = 404;
  }
  if (
    err instanceof Prisma.PrismaClientUnknownRequestError ||
    err instanceof Prisma.PrismaClientRustPanicError ||
    err instanceof Prisma.PrismaClientInitializationError ||
    err instanceof Prisma.PrismaClientValidationError
  ) {
    err.status = 500;
  }
  console.log("******************************************************");
  console.log("************* API Default error Handler **************");
  console.log("******************************************************");
  console.log(err.message);
  res.status(err.status).json({ status: "Error", message: err.message });
});

app.listen(process.env.EXPRESS_PORT, () =>
  console.log(
    `Acqualitica API is now running on port ${process.env.EXPRESS_PORT}`
  )
);
