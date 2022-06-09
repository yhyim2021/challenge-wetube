import Video from "../models/Video";

export const getUploadVideo = (req, res) => {
  return res.render("upload");
};
export const postUploadVideo = async (req, res) => {
  const {
    body: { title, description, hashtags },
    file: { path: videoUrl },
  } = req;

  try {
    const video = await Video.create({
      videoUrl,
      title,
      description,
      hashtags: Video.formatHashtags(hashtags),
    });
    console.log(video);
  } catch (error) {
    return res.status(400).render("upload");
  }
  return res.redirect("/");
};

export const watchVideo = async (req, res) => {
  const {
    params: { id },
  } = req;

  const video = await Video.findById(id);
  if (!video) {
    console.log("video를 찾을 수 없습니다.");
    return res.status(400).redirect("/");
  }
  return res.render("watch", { video });
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
};

export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;

  const video = await Video.findById(id);

  if (!video) {
    return res.status(404).render("edit");
  }
  return res.render("edit", { video });
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description, hashtags },
  } = req;

  const updateVideo = await Video.findByIdAndUpdate(
    id,
    {
      title,
      description,
      hashtags: Video.formatHashtags(hashtags),
    },
    { new: true }
  );
  console.log(updateVideo);
  return res.redirect("/");
};
