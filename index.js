import express from "express";
import cors from "cors";
import { initiateDBConnection } from "./db.js";
import { taskRouter } from "./routes/tasks.js";
//initiating express
const app = express();
const port = 8000;

//middleware
app.use(cors());
app.use(express.json());

//db connectivity
initiateDBConnection();

//routes
app.use("/api/v1/tasks", taskRouter);

//listen and serve
app.listen(port, () => console.log("server started ", port));
