"use stirct";
const express = require("express"),
  cors = require("cors"),
  database = require("./lib/conf/database"),
  path = require("path"),
  port = 9001,
  cookieParser = require("cookie-parser"),
  app = express(),
  books = require("./routes/books.js"),
  router = express.Router();

class Server {
  constructor() {
    this.initExpressMiddleWare();
    this.initDatabase();
    this.listenPort();
    this.initRoutes();
  }
}

// Initialize Express Middlewares
Server.prototype.initExpressMiddleWare = function () {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "public")));
};

// Initialize MongoDB
Server.prototype.initDatabase = function () {
  database.connect(() => {});
};

// Listen port
Server.prototype.listenPort = function () {
  app.listen(port, () => {
    console.log("Server started at port " + port);
  });
};

Server.prototype.initRoutes = function () {
  app.use("/api", router);
  router.use("/books", books);
};

const server = new Server();
