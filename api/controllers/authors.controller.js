const mongoose = require("mongoose"),
  authorSchema = require("../models/author.model");

class AuthorsController {
  constructor() {}
}

AuthorsController.prototype.getAll = (res, req, next) => {
  res.status(200).json({
    message: "Authors fetched",
    content: res.content,
    pagination: res.pagination,
  });
};

AuthorsController.prototype.findById = (req, res, next) => {
  let authorId = req.params.authorId;
  authorSchema
    .findById(authorId)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

AuthorsController.prototype.createAuthor = (req, res, next) => {
  const author = new authorSchema({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
  });
  author
    .save()
    .then((result) => {
      res.status(200).json({
        message: result.name + " successfully added.",
        object: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

AuthorsController.prototype.updateAuthor = (res, req, next) => {
  authorSchema
    .findOneAndUpdate(
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

AuthorsController.prototype.deleteAuthor = (res, req, next) => {
  const bookId = req.params.authorId;
  authorSchema
    .deleteOne({ _id: authorId })
    .then((result) => {
      res.status(200).json({
        message: "Deleted Successfully",
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = new AuthorsController();
