const Book = require("../models/book.model");

class BooksController {
  constructor() {}
}

BooksController.prototype.createBook = (bookData) => {
  const user = new User(bookData);
  return user.save();
};

BooksController.prototype.findById = (req, res) => {
  let bookId = req.params.id;
  Book.findById(bookId)
    .exec()
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

module.exports = new BooksController();
