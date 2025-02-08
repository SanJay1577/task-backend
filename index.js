import express from "express";
import cors from "cors";
import { initiateDBConnection } from "./db.js";
import { taskRouter } from "./routes/tasks.js";
import { userRouter } from "./routes/users.js";
import dotenv from "dotenv";

//env configurations
dotenv.config();

//initiating express
const app = express();
const port = process.env.PORT;

//middleware
app.use(cors());
app.use(express.json());

//db connectivity
initiateDBConnection();

//routes
app.use("/api/v1/tasks", taskRouter);
app.use("/api/v1/users", userRouter);

//listen and serve
app.listen(port, () => console.log("server started ", port));
