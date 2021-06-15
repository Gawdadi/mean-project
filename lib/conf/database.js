const mongoose = require("mongoose");

class DatabaseConfig {
  constructor() {}
}

DatabaseConfig.prototype.connect = function () {
  var mongoDB =
    "mongodb+srv://fiterm:Aditya_%21%40%23%2415@restcluster.fpehf.mongodb.net/library-manager";
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
