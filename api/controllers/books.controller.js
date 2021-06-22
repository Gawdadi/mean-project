const bookSchema = require("../models/book.model"),
  mongoose = require("mongoose"),
  pageable = require("../middleware/pageable"),
  authorSchema = require("../models/author.model"),
  authorService = require("../../lib/services/author.service");

class BooksController {
  constructor() {}
}

BooksController.prototype.getAll = (req, res, next) => {
  res.status(200).json({
    message: "Books fetched.",
    content: res.content,
    pagination: res.pagination,
  });
  // });
};

BooksController.prototype.findById = (req, res, next) => {
  let bookId = req.params.bookId;
  bookSchema
    .findById(bookId)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

BooksController.prototype.createBook = async (req, res) => {
  const author = await authorService.getById(req.body.author_id);

  const book = new bookSchema({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    author_id: req.body.author_id,
    author_name: author.name,
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

BooksController.prototype.updateBook = async (req, res) => {
  bookSchema
    .findOneAndUpdate(
      {
        _id: req.body._id,
      },
      {
        $set: {
          name: req.body.name,
          price: req.body.price,
          author_id: req.body.author_id,
          author_name: await authorSchema.findById(req.body.author_id).exec(),
        },
      },
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
  bookSchema
    .deleteOne({ _id: bookId })
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