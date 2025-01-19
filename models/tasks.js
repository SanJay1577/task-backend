import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
  createdTime: {
    type: Date,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

const Task = mongoose.model("tasks", taskSchema);
export { Task };
