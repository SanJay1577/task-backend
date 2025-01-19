import { Task } from "../models/tasks.js";

export async function getAllTask(filters) {
  if (filters) {
    return await Task.find({ ...filters });
  }
  return await Task.find();
}

export async function addNewTask(req) {
  return await new Task({
    ...req.body,
  }).save();
}

export async function editNewTask(req) {
  return await Task.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  );
}

export async function deleteTask(req) {
  return await Task.findByIdAndDelete({
    _id: req.params.id,
  });
}
