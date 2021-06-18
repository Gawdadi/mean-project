class TokenAuthentication {
  constructor() {}
}

TokenAuthentication.prototype.requireToken = (req, res, next) => {
  const authHeader = req.headers["auth-token"];
  console.log(authHeader);
  next();
};

module.exports = new TokenAuthentication();
