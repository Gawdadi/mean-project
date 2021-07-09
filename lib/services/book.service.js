const bookSchema = require("../../api/models/book.model");

class BookService {
  constructor() {}
}

BookService.prototype.getById = (id) => {
  return bookSchema
    .findById(id)
    .exec()
    .then((res) => {
      return res;
    });
};

BookService.prototype.getByIds = (ids) => {
  return bookSchema
    .where("_id")
    .in(ids)
    .exec()
    .then((res) => {
      return res;
    });
};

module.exports = new BookService();
