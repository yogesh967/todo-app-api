require("dotenv").config();
const jwt = require("jsonwebtoken");

const isLoggedIn = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      if (token) {
        const payload = await jwt.verify(token, process.env.SECRET);
        if (payload) {
          req.user = payload;
          next();
        } else {
          return res.status(400).json({ err: "token verification failed" });
        }
      } else {
        return res.status(400).json({ err: "malformed auth header" });
      }
    } else {
      return res.status(400).json({ err: "No authorization header" });
    }
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};

module.exports = {
  isLoggedIn,
};
