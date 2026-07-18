import express from "express";
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser')
import authRoutes from "./routes/auth.routes";
import propertyRoutes from "./routes/property.routes";
import corsOptions from "./config/cors";

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.use("/api/properties", propertyRoutes);

export default app;