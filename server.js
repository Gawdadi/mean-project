"use strict";
const express = require("express"),
  database = require("./lib/conf/database"),
  path = require("path"),
  cors = require("cors"),
  app = express(),
  books = require("./api/routes/books.route"),
  authors = require("./api/routes/authors.route"),
  students = require("./api/routes/students.route"),
  users = require("./api/routes/users.route"),
  issue_book = require("./api/routes/issue_book.route"),
  login = require("./api/routes/login.route"),
  morgan = require("morgan"),
  config = require("./lib/conf/appconfig"),
  authMiddleware = require("./api/middleware/tokenAuth"),
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
Server.prototype.initExpressMiddleWare = () => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, "public")));

  // Cors

  app.use(
    cors({
      origin: "http://localhost:4200",
      allowedHeaders: "Origin,X-Requested-With,content-type,Authorization",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    })
  );
};

// Initialize MongoDB
Server.prototype.initDatabase = () => {
  database.connect(() => {});
};

// Listen port
Server.prototype.listenPort = () => {
  app.listen(config.app.port, () => {
    console.log("Server started at port " + config.app.port);
  });
};

// Load API routes and error handling
Server.prototype.initRoutes = () => {
  app.use("/api", router);
  router.use("/login", login);
  router.use("/books", authMiddleware.requireToken, books);
  router.use("/authors", authMiddleware.requireToken, authors);
  router.use("/students", authMiddleware.requireToken, students);
  router.use("/users", authMiddleware.requireToken, users);
  router.use("/issueBook", authMiddleware.requireToken, issue_book);

  // Always use error handling after routes.
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
};

// Logger
Server.prototype.initLogger = () => {
  app.use(morgan("dev"));
};

const server = new Server();
