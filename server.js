"use stirct";
const express = require("express"),
  cors = require("cors"),
  database = require("./lib/conf/database"),
  path = require("path"),
  port = 9001,
  cookieParser = require("cookie-parser"),
  app = express(),
  books = require("./routes/books.js"),
  morgan = require("morgan"),
  router = express.Router();

class Server {
  constructor() {
    this.initExpressMiddleWare();
    this.initDatabase();
    this.listenPort();
    this.initLogger();
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

// Load API routes
Server.prototype.initRoutes = function () {
  app.use("/api", router);
  router.use("/books", books);
};

// Logger
Server.prototype.initLogger = function () {
  app.use(morgan("dev"));
};

// Error handling.
app.use((req, res, next) => {
  const error = new Error("Id not found");
  error.status = 404;
  next(error);
});

// Default errors send by database.
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

const server = new Server();
