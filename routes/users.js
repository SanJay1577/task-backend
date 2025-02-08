import express from "express";
import { addNewUser, getUser } from "../controllers/users.js";
import bcrypt from "bcrypt";
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    //    find user is already registered
    let user = await getUser(req);
    if (user) {
      return res.status(400).json({ error: "User already exist" });
    }
    //generate an hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    user = await addNewUser(req, hashedPassword);
    return res.status(200).json({ message: "added new user", userInfo: user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server error" });
  }
});

export const userRouter = router;
