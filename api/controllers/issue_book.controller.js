const mongoose = require("mongoose"),
  issueBookSchema = require("../models/issue_book.model"),
  issueBookService = require("../../lib/services/issueBook.service"),
  bookService = require("../../lib/services/book.service"),
  studentService = require("../../lib/services/student.service"),
  commonUtils = require("../../lib/utils/common.utility");

class IssueBookController {
  constructor() {}
}

IssueBookController.prototype.getAll = async (req, res, next) => {
  res.status(200).json({
    message: "List fetched.",
    content: res.content,
    pagination: res.pagination,
  });
};

IssueBookController.prototype.getWithDetails = async (req, res, next) => {
  try {
    /**
     * Get student and book ids
     */
    const bookIds = [...new Set(res.content.map((elem) => elem.bookId))];
    const studentsIds = [...new Set(res.content.map((elem) => elem.studentId))];

    /**
     * Hashmap for students and books
     */
    const booksHashMap = commonUtils.getHashMap(
      await bookService.getByIds(bookIds)
    );
    const studentsHashMap = commonUtils.getHashMap(
      await studentService.getByIds(studentsIds)
    );
    res.status(200).json({
      message: "List fetched.",
      content: res.content,
      books: booksHashMap,
      students: studentsHashMap,
      pagination: res.pagination,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

IssueBookController.prototype.findById = (req, res, next) => {
  const issueBookId = req.params.issueBookId;
  issueBookSchema
    .findById(issueBookId)
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

IssueBookController.prototype.create = (req, res, next) => {
  const issueBook = new issueBookSchema({
    _id: new mongoose.Types.ObjectId(),
    bookId: req.body.bookId,
    studentId: req.body.studentId,
    createdBy: req.user.name,
    createdById: req.user._id,
    status: "ISSUE",
    issueDate: new Date().toISOString(),
  });

  issueBook
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Book successfully issued.",
        object: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

IssueBookController.prototype.return = async (req, res, next) => {
  try {
    const issueBook = await issueBookService.getById(req.body.id);
    if (issueBook.status === "RETURN") {
      res.status(200).json({
        message: "Book already returned",
      });
      return;
    }
    issueBookSchema
      .findByIdAndUpdate(
        req.body.id,
        { $set: { status: "RETURN", returnDate: new Date().toISOString() } },
        {
          new: true,
        }
      )
      .then((result) => {
        res.status(200).json({
          message: "Book returned successfully.",
          object: result,
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: error,
        });
      });
  } catch {}
};

// IssueBookController.prototype.lost = async (req, res, next) => {
//   try {
//     const issueBook = await issueBookService.getById(req.body.id);
//     if (issueBook.status === "LOST") {
//       res.status(200).json({
//         message: "Book already marked as lost",
//       });
//       return;
//     }
//     issueBookSchema
//       .findByIdAndUpdate(
//         req.body.id,
//         { $set: { status: "LOST", returnDate: new Date().toISOString() } },
//         {
//           new: true,
//         }
//       )
//       .then((result) => {
//         res.status(200).json({
//           message: "Book returned successfully.",
//           object: result,
//         });
//       })
//       .catch((error) => {
//         res.status(500).json({
//           message: error,
//         });
//       });
//   } catch {}
// };

IssueBookController.prototype.update = (req, res, next) => {
  issueBookSchema
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

IssueBookController.prototype.delete = (req, res, next) => {
  const studentId = req.params.studentId;
  issueBookSchema
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

IssueBookController.prototype.search = (req, res, next) => {
  console.log(req.query);
  var query = { $text: { $search: req.query.search, $language: "en" } };
  console.log(text);
  issueBookSchema
    .find(query)
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Successfully fetched.",
        object: result,
      });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

module.exports = new IssueBookController();
