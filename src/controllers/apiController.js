import Video from "../models/Video";
import Comment from "../models/Comment";

export const createComment = async (req, res) => {
  // console.log(req.params);
  // console.log(req.body);

  const {
    session: { user },
    body: { text },
    params: { id },
  } = req;

  console.log(user, text, id);
  const video = await Video.findById(id);
  if (!video) {
    return res.sendStatus(404);
  }

  console.log(video);
  const comment = await Comment.create({
    text,
    owner: user._id,
    video: id,
  });
  console.log(comment);
  return res.sendStatus(201);
};
