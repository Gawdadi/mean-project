"use stirct";
const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose"),
  Book = require("../models/book.model"),
  booksController = require("../controllers/books.controller");

router.get("/", function (req, res) {
  res.status(200).json({
    message: "Success.In books get api.",
  });
});

router.get("/:id", booksController.findById);

router.post("/", function (req, res) {
  const book = new Book({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });
  book
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Success.In books post api.",
        object: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(error);
    });
});

router.put("/", function (req, res) {
  res.status(200).json({
    message: "Success.In books get api.",
  });
});

router.delete("/:id", function (req, res) {
  res.send("In books get api.");
  console.log("its worikisdsdf");
});

module.exports = router;
