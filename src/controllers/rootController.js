import User from "../models/User";
import Video from "../models/Video";
import bcrypt from "bcrypt";

export const home = async (req, res) => {
  const videos = await Video.find({})
    .sort({ createdAt: "desc" })
    .populate("owner");
  console.log(videos);
  return res.render("home", { videos });
};
export const getJoin = (req, res) => {
  return res.render("join");
};
export const postJoin = async (req, res) => {
  // console.log(req.body);
  const {
    body: { email, username, name, password, cpassword },
  } = req;

  if (password !== cpassword) {
    return res.status(404).render("join");
  }

  const isExistUser = await User.exists({ $or: [{ email }, { username }] });
  console.log(isExistUser);
  if (isExistUser) {
    return res.status(404).render("join");
  }

  const createUser = await User.create({ email, username, name, password });
  return res.redirect("/");
};
export const getLogin = (req, res) => {
  return res.render("login");
};
export const postLogin = async (req, res) => {
  const {
    body: { username, password },
  } = req;

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).render("login");
  }
  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    return res.status(404).render("login");
  }
  console.log("Login successful");
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};

export const logout = (req, res) => {
  console.log("Logout successful");
  req.session.destroy();
  return res.redirect("/");
};
