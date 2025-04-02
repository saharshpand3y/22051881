import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { router } from "./routes/userRoutes.js";
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
app.use("/api", router);

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server running on port ${process.env.PORT || 3000}`)
);
