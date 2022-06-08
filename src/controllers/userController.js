import User from "../models/User";

export const getProfile = (req, res) => {
  return res.render("profile");
};

export const postProfile = async (req, res) => {
  const {
    body: { username, name },
    session: {
      user: { _id: id },
    },
  } = req;

  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        username,
        name,
      },
      { new: true }
    );
    console.log(updateUser);
    req.session.user = updateUser;
  } catch (error) {
    console.log("error : ", error.codeName);
    return res.render("profile");
  }
  // const updateUser = await User.find({ username });
  // console.log("UpdateUser", updateUser);
  // console.log("Object", Object.keys(updateUser).length);

  // if (Object.keys(updateUser).length !== 1) {
  //   console.log(`Username : ${updateUser[0].username} already exists`);
  //   return res.status(404).render("profile");
  // }

  // console.log(req.session.user._id, updateUser[0]._id);
  // if (String(req.session.user._id) !== String(updateUser[0]._id)) {
  //   console.log("세션과 유저가 일치하지 않습니다");
  //   return res.status(404).render("home");
  // }
  // updateUser[0].username = username;
  // updateUser[0].name = name;
  // await updateUser[0].save();
  // req.session.user = updateUser[0];
  return res.redirect("/");
};
