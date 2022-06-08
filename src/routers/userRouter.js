import express from "express";
import {
  getPassword,
  getProfile,
  postPassword,
  postProfile,
} from "../controllers/userController";
import { avatarUpload } from "../localsMiddlewares";

const userRouter = express.Router();

userRouter
  .route("/profile")
  .get(getProfile)
  .post(avatarUpload.single("avatar"), postProfile);
userRouter.route("/password").get(getPassword).post(postPassword);

export default userRouter;
