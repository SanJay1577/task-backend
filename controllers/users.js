import { User } from "../models/users.js";

export async function getUser(req) {
  return await User.findOne({ email: req.body.email });
}

export async function addNewUser(req, hashedPassword) {
  return await new User({
    ...req.body,
    password: hashedPassword,
  }).save();
}
