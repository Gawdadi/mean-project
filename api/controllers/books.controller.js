const bookSchema = require("../models/book.model"),
  mongoose = require("mongoose"),
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
};

BooksController.prototype.getWithAuthors = async (req, res, next) => {
  try {
    const unique = [...new Set(res.content.map((item) => item.author_id))];
    const authors = await authorService.getByIds(unique);
    const authorsObj = {};
    authors.forEach((elem) => {
      if (!authorsObj[elem._id]) authorsObj[elem._id] = elem;
    });
    res.status(200).json({
      message: "Books fetched.",
      content: res.content,
      authors: authorsObj,
      pagination: res.pagination,
    });
  } catch {}
};

BooksController.prototype.findById = (req, res, next) => {
  let bookId = req.params.bookId;
  bookSchema
    .findById(bookId)
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Successfully fetched.",
        object: result,
      });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

BooksController.prototype.createBook = async (req, res) => {
  if (!req.body)
    return res.status(500).json({
      message: "Data cant be empty",
    });
  if (!req.body.author_id)
    return res.status(500).json({
      message: "Author not selected.",
    });
  const book = new bookSchema({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description,
    createdBy: req.user.name,
    createdById: req.user._id,
    price: req.body.price,
    author_id: req.body.author_id,
  });

  book
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Successfully created.",
        object: result,
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

BooksController.prototype.updateBook = (req, res) => {
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
        },
      },
      { new: true }
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

BooksController.prototype.search = (req, res, next) => {
  console.log(req.query);
  var searchTerm = req.query.key;
  bookSchema
    .find({
      $or: [{ name: { $regex: searchTerm, $options: "i" } }],
    })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Successfully fetched.",
        object: result,
      });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

module.exports = new BooksController();
