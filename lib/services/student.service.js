const studentSchema = require("../../api/models/student.model");

class StudentService {
  constructor() {}
}

StudentService.prototype.getById = (id) => {
  return studentSchema
    .findById(id)
    .exec()
    .then((res) => {
      return res;
    });
};

StudentService.prototype.getByIds = (ids) => {
  return studentSchema
    .where("_id")
    .in(ids)
    .exec()
    .then((res) => {
      return res;
    });
};

module.exports = new StudentService();
