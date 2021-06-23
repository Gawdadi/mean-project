const jwt = require("jsonwebtoken"),
  dotenv = require("dotenv");

dotenv.config();

class TokenAuthentication {
  constructor() {}
}

TokenAuthentication.prototype.requireToken = (req, res, next) => {
  console.log(req.headers);
  // const token = req.headers["authorization"];
  // if (!token)
  //   return res.status(403).json({
  //     message: "Not authorised",
  //   });

  // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
  //   if (err)
  //     return res.status(403).json({
  //       message: "Token expired",
  //     });
  //   req.user = user;
  //   next();
  // });
  next();
};

module.exports = new TokenAuthentication();
