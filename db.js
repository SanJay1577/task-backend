import mongoose from "mongoose";
export function initiateDBConnection() {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/task_backend");
    console.log("Database connection established");
  } catch (error) {
    console.log("Error establishing database connection", error);
  }
}
