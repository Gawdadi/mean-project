"use stirct";
const express = require("express"),
  cors = require("cors"),
  database = require("./lib/conf/database"),
  path = require("path"),
  port = 9001,
  cookieParser = require("cookie-parser"),
  app = express(),
  books = require("./api/routes/books.route.js"),
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
Server.prototype.initExpressMiddleWare = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  // app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "public")));

  // Cors
  app.use((req, res, next) => {
    // Use '*' to allow all origins.
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    console.log(req.method);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
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
  router.use("/books", books);

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
