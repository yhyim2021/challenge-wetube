import express from "express";

const userRouter = express.Router();

userRouter.route("/profile").get(getProfile).post(postProfile);

export default userRouter;
