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
    return res.status(406).render("join");
  }
  const createUser = await User.create({ email, username, password });
  return res.redirect("/");
};
export const getLogin = (req, res) => {};
export const postLogin = (req, res) => {};
