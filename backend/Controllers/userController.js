const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;
// create token
const createToken = (id) => {
  return jwt.sign({ id }, "ansih node-auth secret", {
    expiresIn: maxAge,
  });
};

module.exports.signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (err) {
    next(err);
  }
};

module.exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        res.status(201).json({ user: user._id });
      }
      throw Error("Incorrect Password");
    }
    throw Error("Incorrect Email");
  } catch (error) {
    next(error);
  }
};

module.exports.update = async (req, res) => {};

module.exports.delete = async (req, res) => {};
