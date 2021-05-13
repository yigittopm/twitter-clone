const pool = require("../helpers/database");
const ErrorResponse = require("../utils/ErrorResponse");

const register = async (req, res, next) => {
  const { username, password, email } = await req.body;

  //test
  const username_regex = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/g;
  const email_regex = /([a-zA-Z0-9_]+)@([a-zA-Z]+)(\.[a-z]{2,})/g;
  const password_regex = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/g;

  if (!username_regex.test(username)) {
    return next (new ErrorResponse(
      { success: "false", message: "Username yanlış formda." },
      404
    ));
  }

  if (!email_regex.test(email)) {
    return next(new ErrorResponse(
      { success: "false", message: "Email yanlış formda." },
      404
    ));
  }

  if (!password_regex.test(password)) {
    return next(new ErrorResponse(
      { success: "false", message: "Password yanlış formda." },
      404
    ));
  }

  const data = await pool.query(process.env.DB_INSERT, [
    username,
    password,
    email,
  ]);

  res.json({ success: "true", data });
};

module.exports = {
  register,
};
