const mongoClient = require("mongodb").MongoClient;

class DatabaseConfig {
  constructor() {}
}

DatabaseConfig.prototype.connect = function () {
  var mongoDB =
    "mongodb+srv://fiterm:Aditya_%21%40%23%2415@restcluster.fpehf.mongodb.net/test?retryWrites=true&w=majority";
  mongoClient.connect(
    mongoDB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, db) {
      if (!err) {
        console.log("Connected to mongo server.");
      } else {
        console.log("Error while connecting to mongodb.");
      }
    }
  );
};

module.exports = new DatabaseConfig();
