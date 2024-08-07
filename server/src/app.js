import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan"

import ApiRouter from "./routes/index.js";
import { healthCheck } from "./controllers/health.controller.js";

// accept json and form data
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ClientUrl = 'https://employee-management-system-k49b814pz-gaurav-ghuges-projects.vercel.app/';

// enable cross origin requests
app.use(cors(
  {
    origin: process.env.CLIENT,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  }
));

// app.use(cors());



// for receiving cookies
app.use(cookieParser());



app.use("/api", ApiRouter);


app.use("/health", healthCheck);





export { app };
