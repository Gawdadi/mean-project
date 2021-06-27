const authorSchema = require("../../api/models/author.model");

class AuthorService {
  constructor() {}
}

AuthorService.prototype.getById = (id) => {
  return authorSchema
    .findById(id)
    .exec()
    .then((res) => {
      return res;
    });
};

AuthorService.prototype.getByIds = (ids) => {
  return authorSchema
    .where("_id")
    .in(ids)
    .exec()
    .then((res) => {
      return res;
    });
};

module.exports = new AuthorService();
