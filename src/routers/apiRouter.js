import express from "express";
import { createComment } from "../controllers/apiController";

const apiRouter = express.Router();

apiRouter.post("/videos/:id([0-9a-f]{24}/comment)", createComment);

export default apiRouter;
