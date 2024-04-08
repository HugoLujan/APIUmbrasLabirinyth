import express from "express";
import cors from "cors";
import timesRoutes from "./Routes/Time.routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(timesRoutes);

export default app;
