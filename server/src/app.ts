import express from "express";
const cors = require('cors')
const cookieParser = require('cookie-parser')
import authRoutes from "./routes/auth.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

export default app;