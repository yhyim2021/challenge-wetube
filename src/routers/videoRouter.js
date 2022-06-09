import express from "express";
import {
  deleteVideo,
  getUploadVideo,
  postUploadVideo,
  watchVideo,
} from "../controllers/videoController";
import { videoUpload } from "../localsMiddlewares";

const videoRouter = express.Router();

videoRouter
  .route("/upload")
  .get(getUploadVideo)
  .post(videoUpload.single("video"), postUploadVideo);
videoRouter.route("/:id([0-9a-f]{24})/watch").get(watchVideo);
videoRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideo);

export default videoRouter;
