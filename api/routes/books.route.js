"use stirct";
const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose"),
  BookSchema = require("../models/book.model"),
  pageable = require("../middleware/pageable");
booksController = require("../controllers/books.controller");

router.get("/getAll", pageable.pagination(BookSchema), booksController.getAll);

router.get("/getById/:bookId", booksController.findById);

router.post("/", booksController.createBook);

router.put("/", booksController.updateBook);

router.delete("/:bookId", booksController.deleteBook);

module.exports = router;
