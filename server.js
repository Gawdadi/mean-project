const express = require("express"),
  database = require("./lib/conf/database"),
  path = require("path"),
  port = 9001,
  cookieParser = require("cookie-parser"),
  app = express(),
  books = require("./api/routes/books.route.js"),
  authors = require("./api/routes/authors.route.js"),
  users = require("./api/routes/users.route.js"),
  login = require("./api/routes/login.route.js"),
  morgan = require("morgan"),
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
  // app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "public")));

  // Cors
  app.use((req, res, next) => {
    // Use '*' to allow all origins.
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");

    // Request methods
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type, authorization"
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader("Access-Control-Allow-Credentials", true);

    next();
  });
};

// Initialize MongoDB
Server.prototype.initDatabase = () => {
  database.connect(() => {});
};

// Listen port
Server.prototype.listenPort = () => {
  app.listen(port, () => {
    console.log("Server started at port " + port);
  });
};

// Load API routes and error handling
Server.prototype.initRoutes = () => {
  app.use("/api", router);
  router.use("/books", authMiddleware.requireToken, books);
  router.use("/authors", authMiddleware.requireToken, authors);
  router.use("/users", authMiddleware.requireToken, users);
  router.use("/login", login);
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
