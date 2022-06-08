import express from "express";
import { getProfile, postProfile } from "../controllers/userController";
import { avatarUpload } from "../localsMiddlewares";

const userRouter = express.Router();

userRouter
  .route("/profile")
  .get(getProfile)
  .post(avatarUpload.single("avatar"), postProfile);

export default userRouter;
