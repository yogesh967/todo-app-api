const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { SECRET } = process.env;

const signup = async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);
  const user = new User(req.body);
  user
    .save()
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      return res.status(400).json({ err: err.message });
    });
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const result = await bcrypt.compare(req.body.password, user.password);
      if (result) {
        const token = jwt.sign({ id: user._id, email: user.email }, SECRET);
        return res.json({ token });
      } else {
        return res.status(400).json({ err: "password doesn't match" });
      }
    } else {
      res.status(400).json({ err: "User doesn't exist" });
    }
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};

module.exports = { signup, login };
