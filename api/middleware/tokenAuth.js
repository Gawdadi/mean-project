const jwt = require("jsonwebtoken"),
  dotenv = require("dotenv");

dotenv.config();

class TokenAuthentication {
  constructor() {}
}

TokenAuthentication.prototype.requireToken = (req, res, next) => {
  const token = req.headers["auth-token"];
  if (!token) {
    console.log(token);
    return res.status(403).json({
      message: "Not authorised",
    });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err)
      return res.status(403).json({
        message: "Token expired",
      });
    req.user = user;
    next();
  });
};

module.exports = new TokenAuthentication();
