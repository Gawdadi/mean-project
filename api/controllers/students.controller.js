const mongoose = require("mongoose"),
  studentSchema = require("../models/student.model");

class StudentContoller {
  constructor() {}
}

StudentContoller.prototype.getAll = (req, res, next) => {
  res.status(200).json({
    message: "Students fetched.",
    content: res.content,
    pagination: res.pagination,
  });
};

StudentContoller.prototype.findById = (req, res, next) => {
  const studentId = req.params.studentId;
  studentSchema
    .findById(studentId)
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

StudentContoller.prototype.createStudent = (req, res, next) => {
  const student = new studentSchema({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    createdBy: req.user.name,
    createdById: req.user._id,
    section: req.body.section,
    rno: req.body.rno,
    uniqueId: req.body.uniqueId,
    class: req.body.class,
  });

  student
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

StudentContoller.prototype.updateStudent = (req, res, next) => {
  studentSchema
    .findOneAndUpdate(
      {
        _id: req.body._id,
      },
      {
        $set: {
          name: req.body.name,
          section: req.body.section,
          rno: req.body.rno,
          IdNumber: req.body.IdNumber,
          class: req.body.class,
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

StudentContoller.prototype.deleteStudent = (req, res, next) => {
  const studentId = req.params.studentId;
  studentSchema
    .deleteOne({ _id: studentId })
    .then((result) => {
      res.status(200).json({
        message: "Deleted Successfully",
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = new StudentContoller();
