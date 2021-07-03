const issueBookSchema = require("../../api/models/issue_book.model");

class IssueBookService {
  constructor() {}
}

IssueBookService.prototype.getById = (id) => {
  return issueBookSchema
    .findById(id)
    .exec()
    .then((res) => {
      return res;
    });
};

IssueBookService.prototype.getByIds = (ids) => {
  return issueBookSchema
    .where("_id")
    .in(ids)
    .exec()
    .then((res) => {
      return res;
    });
};

module.exports = new IssueBookService();
