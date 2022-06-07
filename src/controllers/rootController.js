import User from "../models/User";
import bcrypt from "bcrypt";

export const home = (req, res) => {
  return res.render("home");
};
export const getJoin = (req, res) => {
  return res.render("join");
};
export const postJoin = async (req, res) => {
  // console.log(req.body);
  const {
    body: { email, username, password, cpassword },
  } = req;

  if (password !== cpassword) {
    return res.status(404).render("join");
  }

  const isExistUser = await User.exists({ $or: [{ email }, { username }] });
  console.log(isExistUser);
  if (isExistUser) {
    return res.status(404).render("join");
  }

  const createUser = await User.create({ email, username, password });
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
  req.session.loggedInUser = user;
  return res.redirect("/");
};
