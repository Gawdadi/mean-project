const BookSchema = require("../models/book.model"),
  mongoose = require("mongoose");

class BooksController {
  constructor() {}
}

BooksController.prototype.getAll = (req, res, next) => {
  BookSchema.find().then((result) => {
    res.status(200).json({
      message: "Books fetched.",
      data: result,
    });
  });
};

BooksController.prototype.findById = (req, res, next) => {
  let bookId = req.params.bookId;
  BookSchema.findById(bookId)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

BooksController.prototype.createBook = (req, res) => {
  const book = new BookSchema({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });
  book
    .save()
    .then((result) => {
      res.status(200).json({
        message: result.name + " successfully added.",
        object: result,
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

BooksController.prototype.updateBook = (req, res) => {
  BookSchema.findOneAndUpdate(
    {
      _id: req.body._id,
    },
    { $set: { name: req.body.name, price: req.body.price } },
    { upsert: true }
  )
    .then((result) => {
      res.status(200).json({
        message: "Updated successfully.",
        object: result,
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

BooksController.prototype.deleteBook = (req, res) => {
  const bookId = req.params.bookId;
  BookSchema.deleteOne({ _id: bookId })
    .then((result) => {
      res.status(200).json({
        message: "Deleted Successfully",
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = new BooksController();
