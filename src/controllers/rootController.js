export const home = (req, res) => {
  return res.render("home");
};
export const getJoin = (req, res) => {
  return res.render("join");
};
export const postJoin = (req, res) => {
  console.log(req.body);
  const {
    body: { email, username, password, cpassword },
  } = req;
  return res.redirect("/");
};
export const getLogin = (req, res) => {};
export const postLogin = (req, res) => {};
