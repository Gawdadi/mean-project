const mongoose = require("mongoose"),
  config = require("./appconfig");

class DatabaseConfig {
  constructor() {}
}

DatabaseConfig.prototype.connect = function () {
  var mongoDB = `mongodb+srv://${config.db.username}:${config.db.password}@${config.db.host}/${config.db.name}`;
  mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const connection = mongoose.connection;
  connection.on("open", () => {
    console.log("Connected");
  });
};

module.exports = new DatabaseConfig();
