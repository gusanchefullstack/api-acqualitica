import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Hello world of Acqualitica"));
app.listen(process.env.EXPRESS_PORT, () =>
  console.log(`Acqualitica API is now running on port ${process.env.EXPRESS_PORT}`)
);
