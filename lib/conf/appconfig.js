const env = require("dotenv");
env.config();

module.exports = {
  app: {
    port: process.env.DEV_APP_PORT || 9001,
  },

  db: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
  },

  auth: {
    jwt_secret: process.env.JWT_SECRET,
    jwt_expiresin: process.env.JWT_EXPIRES_IN || "24h",
    saltRounds: process.env.SALT_ROUND || 10,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
  },
};
