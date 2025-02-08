import mongoose from "mongoose";
export function initiateDBConnection() {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Database connection established");
  } catch (error) {
    console.log("Error establishing database connection", error);
  }
}
