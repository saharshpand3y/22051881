import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config({
  path: "./.env",
});

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
