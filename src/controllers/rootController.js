import User from "../models/User";

export const home = (req, res) => {
  return res.render("home");
};
export const getJoin = (req, res) => {
  return res.render("join");
};
export const postJoin = async (req, res) => {
  console.log(req.body);
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
export const getLogin = (req, res) => {};
export const postLogin = (req, res) => {};
