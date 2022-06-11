export const createComment = (req, res) => {
  // console.log(req.params);
  // console.log(req.body);

  const {
    session: { user },
    body: { text },
    params: { id },
  } = req;
  return res.end();
};
