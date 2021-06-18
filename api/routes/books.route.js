"use stirct";
const express = require("express"),
  router = express.Router(),
  BookSchema = require("../models/book.model"),
  pageable = require("../middleware/pageable"),
  booksController = require("../controllers/books.controller"),
  authMiddleware = require("../middleware/tokenAuth");

router.get(
  "/getAll",
  authMiddleware.requireToken,
  pageable.pagination(BookSchema),
  booksController.getAll
);

router.get("/getById/:bookId", booksController.findById);

router.post("/", booksController.createBook);

router.put("/", booksController.updateBook);

router.delete("/:bookId", booksController.deleteBook);

module.exports = router;
