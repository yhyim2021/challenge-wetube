import Video from "../models/Video";

export const getUpload = (req, res) => {
  return res.render("upload");
};
export const postUpload = async (req, res) => {
  const {
    body: { title, description, hashtags },
    file: { path: videoUrl },
  } = req;

  try {
    const video = await Video.create({
      videoUrl,
      title,
      description,
      hashtags,
    });
    console.log(video);
  } catch (error) {
    return res.status(400).render("upload");
  }
  return res.redirect("/");
};
