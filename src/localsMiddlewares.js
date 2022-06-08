import multer from "multer";

export const avatarUpload = multer({ dest: "uploads/avatar" });

export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.loggedInUser = req.session.user;
  res.locals.siteName = "Wetube";
  // console.log(res.locals);
  next();
};
