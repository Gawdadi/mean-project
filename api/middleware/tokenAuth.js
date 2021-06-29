const jwt = require("jsonwebtoken"),
  config = require("../../lib/conf/appconfig");

class TokenAuthentication {
  constructor() {}
}

TokenAuthentication.prototype.requireToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token)
    return res.status(403).json({
      message: "Not authorised",
    });
  jwt.verify(token, config.auth.jwt_secret, (err, user) => {
    if (err)
      return res.status(403).json({
        message: "Token expired",
      });
    req.user = user;
    next();
  });
};

module.exports = new TokenAuthentication();
