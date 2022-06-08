import express from "express";
import { getProfile, postProfile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.route("/profile").get(getProfile).post(postProfile);

export default userRouter;
