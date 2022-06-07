import express from "express";
import {
  getJoin,
  getLogin,
  home,
  postJoin,
  postLogin,
} from "../controllers/rootController";

const rootRouter = express.Router();

rootRouter.route("/").get(home);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.route("/join").get(getJoin).post(postJoin);

export default rootRouter;
