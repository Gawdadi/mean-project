"use stirct";
const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose"),
  booksController = require("../controllers/books.controller");

router.get("/", booksController.getAll);

router.get("/:bookId", booksController.findById);

router.post("/", booksController.createBook);

router.put("/", booksController.updateBook);

router.delete("/:bookId", booksController.deleteBook);

module.exports = router;
