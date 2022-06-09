import express from "express";
import {
  getJoin,
  getLogin,
  home,
  logout,
  postJoin,
  postLogin,
  search,
} from "../controllers/rootController";

const rootRouter = express.Router();

rootRouter.route("/").get(home);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/logout").get(logout);
rootRouter.route("/search").get(search);
export default rootRouter;
