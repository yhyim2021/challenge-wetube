import express from "express";

const videoRouter = express.Router();

videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
