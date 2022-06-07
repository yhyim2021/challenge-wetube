import express from "express";

const rootRouter = express.Router();

rootRouter.route("/").get(home);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.route("/join").get(getJoin).post(postJoin);

export default rootRouter;
