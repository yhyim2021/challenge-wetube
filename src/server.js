import "dotenv/config";
import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import { localsMiddleware } from "./localsMiddlewares";
import userRouter from "./routers/userRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_DB,
    }),
  })
);

app.use((req, res, next) => {
  req.sessionStore.all((error, sessions) => {
    // console.log("session", sessions);
    next();
  });
});

app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/users", userRouter);

export default app;
