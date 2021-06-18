const AuthorSchema = require("../../api/models/author.model");

class AuthorService {
  constructor() {}
}

AuthorService.prototype.getById = (id) => {
  return AuthorSchema.findById(id)
    .exec()
    .then((res) => {
      return res;
    });
};

module.exports = new AuthorService();
